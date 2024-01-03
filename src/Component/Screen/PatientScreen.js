import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Import uuid

function Patients() {
  const [patients, setPatients] = useState([
    {
      id: "K8L5ZO17F2",
      name: "Millie Simons",
      dob: "8/6/1998",
      gender: "Male",
    },
  ]);
  const [names, setName] = useState("");
  const [dobs, setDob] = useState("");
  const [genders, setGender] = useState("");

  const [editingPatient, setEditingPatient] = useState(null);
  const [isAddPatientModalOpen, setIsAddPatientModalOpen] = useState(false);

  const openAddPatientModal = () => {
    setIsAddPatientModalOpen(true);
  };

  const closeAddPatientModal = () => {
    setIsAddPatientModalOpen(false);
  };

  const addNewPatient = () => {
    const newPatient = {
      id: uuidv4(),
      name: names,
      dob: dobs,
      gender: genders,
    };
    setPatients([...patients, newPatient]);
    setName("");
    setDob("");
    setGender("");
    closeAddPatientModal();
  };

  const removePatient = (id) => {
    const updatedPatients = patients.filter((patient) => patient.id !== id);
    setPatients(updatedPatients);
  };

  const editPatient = (id) => {
    setEditingPatient(id);
  };

  const saveChanges = (id, updatedInfo) => {
    const updatedPatients = patients.map((patient) =>
      patient.id === id ? { ...patient, ...updatedInfo } : patient
    );
    setPatients(updatedPatients);
    setEditingPatient(null);
  };

  return (
    <div className="container mx-auto mt-10 ">
      <div className="mt-4 flex justify-end">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue"
          onClick={openAddPatientModal}
        >
          + New appointment
        </button>
      </div>

      {/* Modal */}
      {isAddPatientModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Add New Patient</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={closeAddPatientModal}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              <div className="relative p-6 flex-auto">
                <label className="block mb-2">Name:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="New Patient"
                  onChange={(e) => setName(e.target.value)}
                />
                <label className="block my-2">DOB:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="1/1/2000"
                  onChange={(e) => setDob(e.target.value)}
                />
                <label className="block my-2">Gender:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Other"
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
              {/* Footer */}
              <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                {/* Buttons to add or cancel */}
                <button
                  className="text-white bg-green-500 hover:bg-green-700 border-0 py-2 px-4 rounded"
                  onClick={addNewPatient}
                >
                  Add Patient
                </button>
                <button
                  className="text-black ml-4 bg-gray-300 hover:bg-gray-400 border-0 py-2 px-4 rounded"
                  onClick={closeAddPatientModal}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white shadow-md rounded-lg overflow-hidden py-3">
        <table className="w-10/12 ml-40">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
              <th className="py-3 px-6 text-left">Patients ID</th>
              <th className="py-3 px-6 text-left">Name</th>
              <th className="py-3 px-6 text-left">DOB</th>
              <th className="py-3 px-6 text-left">Gender</th>
              <th className="py-3 px-6 text-center">Actions</th>
            </tr>
          </thead>
          <tbody className="text-gray-600 text-sm font-light">
            {patients.map((patient) => (
              <tr
                key={patient.id}
                className="border-b border-gray-200 hover:bg-gray-100"
              >
                <td className="py-3 px-6">{patient.id}</td>
                <td className="py-3 px-6">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      value={patient.name}
                      onChange={(e) =>
                        saveChanges(patient.id, { name: e.target.value })
                      }
                    />
                  ) : (
                    patient.name
                  )}
                </td>
                <td className="py-3 px-6">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      value={patient.dob}
                      onChange={(e) =>
                        saveChanges(patient.id, { dob: e.target.value })
                      }
                    />
                  ) : (
                    patient.dob
                  )}
                </td>
                <td className="py-3 px-6">
                  {editingPatient === patient.id ? (
                    <input
                      type="text"
                      value={patient.gender}
                      onChange={(e) =>
                        saveChanges(patient.id, { gender: e.target.value })
                      }
                    />
                  ) : (
                    patient.gender
                  )}
                </td>
                <td className="py-3 px-6 text-right">
                  {editingPatient === patient.id ? (
                    <button
                      className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                      onClick={() => saveChanges(patient.id, {})}
                    >
                      Save
                    </button>
                  ) : (
                    <>
                      <button
                        className="bg-blue-300 text-white px-4 py-2 rounded mr-2"
                        onClick={() => editPatient(patient.id)}
                      >
                        View
                      </button>
                      <button
                        className="bg-green-500 text-white px-4 py-2 rounded mr-2"
                        onClick={() => editPatient(patient.id)}
                      >
                        Edit
                      </button>
                      <button
                        className="bg-red-500 text-white px-4 py-2 rounded"
                        onClick={() => removePatient(patient.id)}
                      >
                        Remove
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Patients;

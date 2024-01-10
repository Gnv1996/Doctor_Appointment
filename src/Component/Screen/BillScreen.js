import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const BillScreen = ({
  isOpen,
  onClose,
  onTotalAmountChange,
  printView,
  selectedPatient,
}) => {
  const [doctorFee, setDoctorFee] = useState("");
  const [medicineCharge, setMedicineCharge] = useState("");
  const [ambulanceCharge, setAmbulanceCharge] = useState("");
  const [messCharge, setMessCharge] = useState("");
  const [maidFee, setMaidCharge] = useState("");
  const [otherCharge, setOtherCharge] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);
  // const [printView, setPrintView] = useState(false);
  const [gstValue, setgstValue] = useState("");

  useEffect(() => {
    const subtotal =
      parseFloat(doctorFee) +
      parseFloat(medicineCharge) +
      parseFloat(ambulanceCharge) +
      parseFloat(messCharge) +
      parseFloat(maidFee) +
      parseFloat(otherCharge);

    const gst = subtotal * 0.05;
    const total = subtotal + gst;

    setTotalAmount(total);
    setgstValue(gst);
    onTotalAmountChange(totalAmount);
  }, [
    doctorFee,
    medicineCharge,
    ambulanceCharge,
    messCharge,
    maidFee,
    otherCharge,
    onTotalAmountChange,
  ]);

  const saveBillPayment = () => {
    console.log(totalAmount, "Total Amount ;;;;");

    onClose();

    Swal.fire({
      position: "top-center",
      icon: "success",
      title: "Bill Payment Saved Successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    if (selectedPatient && selectedPatient.billPayment) {
      setDoctorFee(selectedPatient.billPayment.doctorFee.toString());
      setMedicineCharge(selectedPatient.billPayment.medicineCharge.toString());
      setAmbulanceCharge(
        selectedPatient.billPayment.ambulanceCharge.toString()
      );
      setMessCharge(selectedPatient.billPayment.messCharge.toString());
      setMaidCharge(selectedPatient.billPayment.maidFee.toString());
      setOtherCharge(selectedPatient.billPayment.otherCharge.toString());
    }
  }, [selectedPatient]);
  useEffect(() => {
    if (!printView) {
      onClose(); // Close the modal when printView is false
    }
  }, [printView]);

  return (
    <div className={`modal ${isOpen ? "block" : "hidden"}`}>
      {/* Modal content */}

      {printView ? (
        <div className="p-4">
          <h2 className="text-2xl items-center ml-52 font-semibold mb-4">
            Bill Payment Details
          </h2>
          <table className="items-center ml-52 w-9/12 mb-4">
            <thead>
              <tr>
                <th className="py-2 px-4 border">All include Fee</th>
                <th className="py-2 px-4 border">Charge</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border">Doctor Fee</td>
                <td className="py-2 px-4 border">{doctorFee}</td>
              </tr>

              <tr>
                <td className="py-2 px-4 border">Medicine Charge</td>
                <td className="py-2 px-4 border">{medicineCharge}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Ambulance Charge</td>
                <td className="py-2 px-4 border">{ambulanceCharge}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Mess Charge</td>
                <td className="py-2 px-4 border">{messCharge}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Maid Charge</td>
                <td className="py-2 px-4 border">{maidFee}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border">Other Charge</td>
                <td className="py-2 px-4 border">{otherCharge}</td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-semibold">
                  {" "}
                  5% gst Include
                </td>
                <td className="py-2 px-4 border font-semibold">
                  ₹ {gstValue.toFixed(2)}
                </td>
              </tr>
              <tr>
                <td className="py-2 px-4 border font-bold">Total Amount</td>
                <td className="py-2 px-4 border font-bold">₹ {totalAmount}</td>
              </tr>
            </tbody>
          </table>
          <button
            className="text-white ml-52 bg-green-500 hover:bg-green-700 border-0 py-2 px-4 rounded mr-2"
            onClick={() => !printView}
          >
            Back
          </button>
          {/* You can add a print button here if you want to implement printing functionality */}
        </div>
      ) : (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
          <div className="relative w-auto max-w-3xl mx-auto my-6">
            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
              {/* Header */}
              <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                <h3 className="text-3xl font-semibold">Bill Payment</h3>
                <button
                  className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={onClose}
                >
                  <span className="text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>

              {/* Body */}
              <div className="relative p-6 px-5 flex-auto">
                <label className="block mb-2">Doctor Fee:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Enter Doctor Fee"
                  value={doctorFee}
                  onChange={(e) => setDoctorFee(e.target.value)}
                />
                <label className="block my-2">Medicine Charge:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Enter Medicine Charge"
                  value={medicineCharge}
                  onChange={(e) => setMedicineCharge(e.target.value)}
                />
                <label className="block my-2">Ambulance Charge:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Enter Ambulance Charge"
                  value={ambulanceCharge}
                  onChange={(e) => setAmbulanceCharge(e.target.value)}
                />
                <label className="block my-2">Mess Charge:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Enter Mess Charge"
                  value={messCharge}
                  onChange={(e) => setMessCharge(e.target.value)}
                />
                <label className="block my-2">Maid Fee:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Enter Maid Charge"
                  value={maidFee}
                  onChange={(e) => setMaidCharge(e.target.value)}
                />
                <label className="block my-2">Other Charge:</label>
                <input
                  className="w-full p-2 border rounded"
                  type="text"
                  placeholder="Enter Other charge"
                  value={otherCharge}
                  onChange={(e) => setOtherCharge(e.target.value)}
                />
              </div>

              {/* Footer */}
              <div className="flex items-center mx-2 justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                <button
                  className="text-white mx-2 bg-green-500 hover:bg-green-700 border-0 py-2 px-4 rounded"
                  onClick={saveBillPayment}
                >
                  Save
                </button>
                <button className="text-white bg-green-500 hover:bg-green-700 border-0 py-2 px-4 rounded">
                  Print
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BillScreen;

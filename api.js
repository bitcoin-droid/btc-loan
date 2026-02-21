// api.js
// This file simulates backend API calls
// Later, we will replace these with real server requests

const API = {
  applyForLoan: async (data) => {
    console.log("Sending loan application to backend:", data);

    // Simulate network delay
    await new Promise((res) => setTimeout(res, 1500));

    return {
      success: true,
      message: "Application received. Await approval.",
      loanId: "LN-" + Math.floor(Math.random() * 100000),
    };
  },

  checkLoanStatus: async (loanId) => {
    await new Promise((res) => setTimeout(res, 1000));

    return {
      status: "pending",
      eta: "24 hours",
    };
  },
};

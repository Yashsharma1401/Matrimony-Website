import React from 'react';

const feedbackData = [
  {
    id: 1,
    userName: "Alice Johnson",
    email: "alice@example.com",
    subject: "App Performance",
    message:
      "I'm facing delays in the application when I update my profile. The response time seems really slow compared to before.",
    date: "12 Dec 2023",
    status: "New",
  },
  {
    id: 2,
    userName: "Bob Smith",
    email: "bob@example.com",
    subject: "Payment Issue",
    message:
      "I recently made a payment, but my account still shows unpaid credits. Please help resolve this matter as soon as possible.",
    date: "11 Dec 2023",
    status: "Pending",
  },
  {
    id: 3,
    userName: "Carol Williams",
    email: "carol@example.com",
    subject: "Bug Report",
    message:
      "When I try to register using my phone number, the page crashes unexpectedly. Kindly look into this bug.",
    date: "10 Dec 2023",
    status: "Resolved",
  },
];

const FeedBackSupport = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        Feedback & Support Requests
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {feedbackData.map((feedback) => (
          <div
            key={feedback.id}
            className="bg-white p-4 rounded-lg shadow border border-gray-200"
          >
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold text-gray-700">
                {feedback.subject}
              </h3>
              <span
                className={`text-xs font-semibold px-2 py-1 rounded ${
                  feedback.status === "New"
                    ? "bg-green-100 text-green-700"
                    : feedback.status === "Pending"
                    ? "bg-yellow-100 text-yellow-700"
                    : "bg-blue-100 text-blue-700"
                }`}
              >
                {feedback.status}
              </span>
            </div>
            <p className="text-sm text-gray-600 mb-3">{feedback.message}</p>
            <div className="text-xs text-gray-500 border-t pt-2">
              <span>{feedback.userName}</span> •{" "}
              <span>{feedback.email}</span>
              <span className="block mt-1">{feedback.date}</span>
            </div>
            <div className="mt-4 flex justify-end">
              <button className="text-xs text-pink-600 font-semibold hover:underline">
                Reply
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeedBackSupport;

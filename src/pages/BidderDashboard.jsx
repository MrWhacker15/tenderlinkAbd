// src/pages/BidderDashboard.jsx
import React, { useState } from "react";
import { Card, CardContent } from "../components/ui/Card"; // Adjust path if necessary
import { Button } from "../components/ui/Button"; // Adjust path if necessary
import { Input } from "../components/ui/Input"; // Adjust path if necessary
import { Textarea } from "../components/ui/Textarea"; // Adjust path if necessary
import { Label } from "../components/ui/Label"; // Adjust path if necessary

const BidderDashboard = () => {
  // Example tender list (replace with real data or API calls)
  const [tenders, setTenders] = useState([
    {
      id: 1,
      title: "Tender for Office Supplies",
      description: "We need to purchase office supplies for the next year.",
      deadline: "2025-06-15",
      status: "Open",
    },
    {
      id: 2,
      title: "Tender for IT Equipment",
      description: "Tender for the supply of computers and accessories.",
      deadline: "2025-06-20",
      status: "Open",
    },
  ]);
  const [bidData, setBidData] = useState({
    tenderId: "",
    bidAmount: "",
    bidDetails: "",
  });
  const [submittedBids, setSubmittedBids] = useState([]);

  const handleBidChange = (e) => {
    setBidData({ ...bidData, [e.target.name]: e.target.value });
  };

  const handleSubmitBid = (e, tenderId) => {
    e.preventDefault();
    const newBid = { ...bidData, tenderId, status: "Submitted" };
    setSubmittedBids([...submittedBids, newBid]);
    setBidData({ tenderId: "", bidAmount: "", bidDetails: "" }); // Reset form
  };

  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Bidder Dashboard</h1>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Available Tenders</h2>
        {tenders.map((tender) => (
          <Card key={tender.id} className="p-4 space-y-2">
            <CardContent>
              <div>
                <strong>Title:</strong> {tender.title}
              </div>
              <div>
                <strong>Description:</strong> {tender.description}
              </div>
              <div>
                <strong>Deadline:</strong> {tender.deadline}
              </div>
              <div>
                <strong>Status:</strong> {tender.status}
              </div>

              {tender.status === "Open" && (
                <form onSubmit={(e) => handleSubmitBid(e, tender.id)}>
                  <div>
                    <Label htmlFor="bidAmount">Bid Amount</Label>
                    <Input
                      id="bidAmount"
                      name="bidAmount"
                      value={bidData.bidAmount}
                      onChange={handleBidChange}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="bidDetails">Bid Details</Label>
                    <Textarea
                      id="bidDetails"
                      name="bidDetails"
                      value={bidData.bidDetails}
                      onChange={handleBidChange}
                      required
                    />
                  </div>
                  <Button type="submit">Submit Bid</Button>
                </form>
              )}
            </CardContent>
          </Card>
        ))}
      </div>

      <div>
        <h2 className="text-xl font-semibold">Submitted Bids</h2>
        {submittedBids.length > 0 ? (
          <ul className="space-y-4 mt-4">
            {submittedBids.map((bid, index) => (
              <Card key={index} className="p-4 space-y-2">
                <CardContent>
                  <div><strong>Tender ID:</strong> {bid.tenderId}</div>
                  <div><strong>Amount:</strong> {bid.bidAmount}</div>
                  <div><strong>Details:</strong> {bid.bidDetails}</div>
                  <div><strong>Status:</strong> {bid.status}</div>
                </CardContent>
              </Card>
            ))}
          </ul>
        ) : (
          <p>No bids submitted yet.</p>
        )}
      </div>
    </div>
  );
};

export default BidderDashboard;

//Logic for handling ticket operations.

// Book a ticket
const bookTicket = async (req, res) => {
  try {
    const { userId, rideId, numberOfTickets } = req.body;

    // Validate inputs
    if (!userId || !rideId || !numberOfTickets) {
      return res.status(400).json({ message: 'Please provide userId, rideId, and numberOfTickets' });
    }

    if (numberOfTickets <= 0) {
      return res.status(400).json({ message: 'Number of tickets must be greater than 0' });
    }

    // Interact with the database to store booking information
    const ticket = await Ticket.create({
      userId,
      rideId,
      numberOfTickets,
      bookingDate: new Date(),
    });

    res.status(201).json({ message: 'Ticket booked successfully', ticket });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Failed to book ticket' });
  }
};

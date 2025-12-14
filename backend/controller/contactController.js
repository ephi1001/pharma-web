const ContactMessage = require('../model/ContactMessage');

// Create a new contact message
const createContactMessage = async (req, res) => {
  try {
    const { name, email, message, location, rating } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required' });
    }

    // Create new contact message
    const newMessage = new ContactMessage({
      name,
      email,
      message,
      location,
      rating
    });

    // Save to database (for now, just log)
    console.log('New contact message:', newMessage);

    // In a real app, you would save to DB: await newMessage.save();

    res.status(201).json({
      message: 'Contact message sent successfully!',
      data: newMessage
    });
  } catch (error) {
    console.error('Error creating contact message:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createContactMessage
};
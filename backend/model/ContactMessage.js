// ContactMessage model (for now, just a simple class since no DB is set up)
class ContactMessage {
  constructor({ name, email, message, location, rating }) {
    this.name = name;
    this.email = email;
    this.message = message;
    this.location = location;
    this.rating = rating;
    this.createdAt = new Date();
  }
}

module.exports = ContactMessage;
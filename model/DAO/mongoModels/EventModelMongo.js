import EventModel from '../../mongoDbValidations/EventModel.js';

export default class EventModelMongo {
  getEvents = () => {
    const events = EventModel.find().select().exec();
    return events;
  };

  getEventById = (id) => {
    const event = EventModel.findById(id).exec();
    return event;
  };

  createEvent = (event) => {
    const newEvent = new EventModel(event);
    return newEvent.save();
  };

  updateEvent = async (id, band) => {
    const updatedEvent = await EventModel.findByIdAndUpdate(id, band, {
      returnDocument: 'after',
    }).exec();
    return updatedEvent;
  };

  deleteEvent = async (id) => {
    const deletedEvent = await EventModel.findByIdAndDelete(id);
    return deletedEvent;
  };
}

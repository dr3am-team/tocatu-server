import EventModel from "../../mongoDbValidations/EventModel.js";

export default class EventModelMongo {
  getEvents = (options) => {
    let query = EventModel.find();
    if (options.filter) {
      query = query.where(options.filter, { $exists: options.exists });
    }
    query = query.select(options.select).exec();

    return query;
  };

  getEventById = (id) => {
    const event = EventModel.findById(id).exec();
    return event;
  };

  createEvent = (event) => {
    const newEvent = new EventModel(event);
    return newEvent.save();
  };

  updateEvent = async (id, event) => {
    const updateOptions = {
      returnDocument: "after"
    };

    const updatedEvent = await EventModel.findByIdAndUpdate(
      id,
      event.viewersId ? { $push: event } : event,
      updateOptions
    ).exec();

    return updatedEvent;
  };

  deleteEvent = async (id) => {
    const deletedEvent = await EventModel.findByIdAndDelete(id);
    return deletedEvent;
  };
}

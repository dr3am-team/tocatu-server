import EventModel from "../../mongoDbValidations/EventModel.js";

export default class EventModelMongo {
  getEvents = (options) => {
    const events = EventModel.find();

    if (options.filter) {
      events.where(options.filter).exists(!!options.exists);
    }
    return events.select(options.select).exec();
  };

  getEventById = (id) => {
    const event = EventModel.findById(id).exec();
    return event;
  };

  createEvent = (event) => {
    const newEvent = new EventModel(event);
    return newEvent.save();
  };

  // updateEvent = async (id, event) => {
  //   const updatedEvent = await EventModel.findByIdAndUpdate(id, event, {
  //     returnDocument: "after"
  //   }).exec();
  //   return updatedEvent;
  // };
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

import EventModel from "../../mongoDbValidations/EventModel.js";

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

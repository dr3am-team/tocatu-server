import Factory from '../model/DAO/factories/Factory.js';
import config from '../config.js';

export default class EventService {
  constructor() {
    this.eventModel = Factory.get(
      config.MODO_PERSISTENCIA()
    ).createEventModel();
  }

  //get events, get event by id, create event, update event, delete event

  getEvents = async () => {
    const events = await this.eventModel.getEvents();
    return events;
  };

  getEventById = async (id) => {
    const event = await this.eventModel.getEventById(id);
    return event;
  };

  createEvent = async (event) => {
    const newEvent = await this.eventModel.createEvent(event);
    return newEvent;
  };

  updateEvent = async (id, event) => {
    const updatedEvent = await this.eventModel.updateEvent(id, event);
    return updatedEvent;
  };

  deleteEvent = async (id) => {
    const deletedEvent = await this.eventModel.deleteEvent(id);
    return deletedEvent;
  };
}

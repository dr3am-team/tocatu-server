import EventService from '../services/EventService.js';

export default class EventController {
  constructor() {
    this.eventService = new EventService();
  }

  //get events, get event by id, create event, update event, delete event

  getEvents = async (req, res) => {
    try {
      const events = await this.eventService.getEvents();
      res.json(events);
    } catch (error) {
      console.error('Error getting events with get', error);
    }
  };

  getEventById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('Empty id');
    }
    try {
      const event = await this.eventService.getEventById(id);
      res.json(event);
    } catch (error) {
      console.error('Error getting event by id get', error);
      res.status(500).send('Check id');
    }
  };

  createEvent = async (req, res) => {
    //console.log(Object.keys(req.body).length)
    if (Object.keys(req.body).length <= 0) {
      res.status(400).send('Empty event object');
    }
    try {
      const newEvent = await this.eventService.createEvent(req.body);
      res.json(newEvent);
    } catch (error) {
      console.error('Error creating event with post', error);
      res.status(500).send('Check your fields');
    }
  };

  updateEvent = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      res.status(400).send('Empty object');
    }
    try {
      const { id } = req.params;
      const updatedEvent = await this.eventService.updateEvent(id, req.body);
      res.json(updatedEvent);
    } catch (error) {
      console.log('Error updating event with put ', error);
      res.status(500).send('Check your fields');
    }
  };

  deleteEvent = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      res.status(400).send('Id not found');
    }
    try {
      const deletedEvent = await this.eventService.deleteEvent(id);
      res.json(deletedEvent);
    } catch (error) {
      console.log('Error deleting event: ', error);
      res.status(500).send('Check the id');
    }
  };
}

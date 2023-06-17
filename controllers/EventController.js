import BarService from "../services/BarService.js";
import EventService from "../services/EventService.js";

export default class EventController {
  constructor() {
    this.eventService = new EventService();
    this.barService = new BarService();
  }

  //get events, get event by id, create event, update event, delete event

  getEvents = async (req, res) => {
    try {
      const events = await this.eventService.getEvents();
      return res.json(events);
    } catch (error) {
      console.error("Error getting events with get", error);
    }
  };

  getEventById = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Empty id");
    }
    try {
      const event = await this.eventService.getEventById(id);
      return res.json(event);
    } catch (error) {
      console.error("Error getting event by id get", error);
      returnres.status(500).send("Check id");
    }
  };

  createEvent = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      console.log(req.body);
      return res.status(400).send("Empty event object");
    }
    try {
      const { event, username } = req.body;
      const newEvent = await this.eventService.createEvent(event);

      const barUpdated = await this.barService.updateBarByUsername(
        username,
        newEvent._id
      );

      return res.json(newEvent);
    } catch (error) {
      console.error("Error creating event with post", error);
      res.status(500).send("Check your fields");
    }
  };

  updateEvent = async (req, res) => {
    if (Object.keys(req.body).length <= 0) {
      return res.status(400).send("Empty object");
    }
    try {
      const { id } = req.params;
      const updatedEvent = await this.eventService.updateEvent(id, req.body);
      return res.json(updatedEvent);
    } catch (error) {
      console.log("Error updating event with put ", error);
      return res.status(500).send("Check your fields");
    }
  };

  deleteEvent = async (req, res) => {
    const { id } = req.params;
    if (!id) {
      return res.status(400).send("Id not found");
    }
    try {
      const deletedEvent = await this.eventService.deleteEvent(id);
      return res.json(deletedEvent);
    } catch (error) {
      console.log("Error deleting event: ", error);
      return res.status(500).send("Check the id");
    }
  };
}

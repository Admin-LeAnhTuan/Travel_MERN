import Tour from "../models/Tour.js";

export const createTours = async (req, res) => {
  const newTour = new Tour(req.body);
  try {
    const saveTour = await newTour.save();
    res
      .status(200)
      .json({ success: true, message: "Successfull created", data: saveTour });
  } catch (error) {
    res
      .status(500)
      .json({ success: true, message: "Failed to create. Try agian" });
  }
};

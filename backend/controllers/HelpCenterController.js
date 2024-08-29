import HelpCenterModel from "../models/HelpCenterModel.js";

const getAllHelpCenters = async (req, res) => {
    try {
        const helpCenters = await HelpCenterModel.find({});
        
        return res.status(200).json({Data:helpCenters,success:true});
    
    } catch (error) {
        return res.status(500).json({ message: 'server error',success:false });
    }
};

const getHelpCenterByTitle = async (req, res) => {
    try {
        const { title } = req.params;

        if(!title) return res.status(404).json({ message: 'title is required',success:false });

        const helpCenter = await HelpCenterModel.findOne({title:title});
        
        if(!helpCenter) return res.status(404).json({ message: 'Data not found',success:false });

        return res.status(200).json({Data:helpCenter,succes:true});

    } catch (error) {
        return res.status(500).json({ message: 'server error',success:false });
    }
};

const createHelpCenter = async (req, res) => {
    try {
        const inputData = req.body;

        if(!inputData?.title) return res.status(404).json({ message: 'title is required',success:false});
        if(!inputData?.description) return res.status(404).json({ message: 'description is required',success:false});

        await HelpCenterModel.create({title:inputData?.title,description:inputData?.description});
        
        return res.status(201).json({Data:'data created successfully',success:true});
    
    } catch (error) {
        return res.status(500).json({ message: 'server error',success:false });
    }
}

export { getAllHelpCenters, getHelpCenterByTitle, createHelpCenter };
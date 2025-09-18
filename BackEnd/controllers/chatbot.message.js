import User from '../models/User.model.js';
import Bot from '../models/bot.model.js';

export const Message = async(req, resp)=>{
   
    try{
       // const text = req.body.text; 
       //or
       const {text} = req.body;

       if(!text?.trim()){//.trim removes whitespaces from string
        resp.status(400).json({message:"Messege cannot be empty."});
       }

       const user = await User.create({ //-? .create()directly saves data into the database
         sender:"User",
         text:text //value of the text variable
       })

       //or to insert data int the databse
       //const user =  new User({sender:"user", text});
       //await user.save();

       //Data for bot Training
       const botResponses = {  //Key, value pair 
        "hello":"What do you want to learn Today!",
        "what is active learning?": "Active learning is engaging with study material through discussion, practice, or teaching others.",
        "what is spaced repetition?": "Spaced repetition is reviewing study material at increasing intervals to improve long-term memory.",
        "what is a mind map?": "A mind map is a visual diagram used to organize information, ideas, or concepts around a central theme.",
        "what is note-taking?": "Note-taking is writing down key ideas to help understand and remember information.",
        "what is self-assessment?": "Self-assessment is evaluating your own strengths and weaknesses to improve learning.",
        "what is group study?": "Group study is learning collaboratively with peers to share knowledge and ideas.",
        "what is a mock test?": "A mock test simulates the real exam to practice time management and exam strategy.",
        "what is exam anxiety?": "Exam anxiety is the nervousness or stress students feel before or during an exam.",
        "what is a study schedule?": "A study schedule is a planned timetable that allocates time for different subjects or topics.",
        "what is peer learning?": "Peer learning is gaining knowledge through discussions and explanations with classmates.",
        "what is goal setting?": "Goal setting is defining specific, measurable, and achievable objectives for study.",
        "what is critical reading?": "Critical reading means analyzing and evaluating text instead of just memorizing it.",
        "what is summarization?": "Summarization is condensing long information into short, clear points for easy recall.",
        "what is time blocking?": "Time blocking is dividing your day into chunks of time dedicated to specific tasks.",
        "what is revision?": "Revision is re-studying and reviewing material to reinforce understanding before exams.",
        "what is punctuality?": "Punctuality is the habit of being on time for tasks, classes, or commitments.",
        "what is discipline?": "Discipline is training yourself to follow rules, routines, and self-control to achieve goals.",
        "what is academic integrity?": "Academic integrity means being honest in studies, avoiding cheating or plagiarism.",
        "what is plagiarism?": "Plagiarism is using someone else's work or ideas without giving proper credit.",
        "what is consistency?": "Consistency is regularly following a routine or habit to achieve steady progress.",
        "what is responsibility?": "Responsibility means being accountable for your actions, duties, and learning.",
        "what is self-discipline?": "Self-discipline is controlling your actions, emotions, and habits to stay focused on goals.",
        "what is respect for teachers?": "Respect for teachers means listening, following instructions, and valuing their guidance.",
        "what is teamwork discipline?": "Teamwork discipline means cooperating with peers, sharing tasks, and respecting group rules.",
        "what is classroom etiquette?": "Classroom etiquette is behaving respectfully, listening actively, and avoiding distractions.",
        "what is perseverance?": "Perseverance means not giving up even when studies or tasks are difficult.",
        "what is digital discipline?": "Digital discipline is using phones, laptops, and the internet responsibly during study time."

       }

       const  normalizedText = text.toLowerCase().trim();//convert all uppercase -> lowercase
       const botResponse = botResponses[normalizedText] || "Sorry, I don't understand that !! can you please rephrase?" //retrieve value from the map by map[key]
       const bot = await Bot.create({
            text:botResponse
       });

       return resp.status(200).json({
         userMessage:user.text,
         botMessage:bot.text
       });
    }
    catch(err){
        console.log("Error is " + err);
        resp.status(500).json({message:err});
    }   
}
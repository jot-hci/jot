# Jot
Team Jot: EECS 330 HCI
P8: Final Report
May Li, Margot Sobota, James White, 
Alejandro Malavet, Daniel Hernandez


<h2> PROBLEM & RELATED WORK</h2>
<h3>The Problem</h3>
According to the 2019 State of Mental Health in America report, over 44 million American adults have a mental illness. Though therapy can help the mentally ill improve their well-being, one of the biggest obstacles in therapy is tracking mental health progress. According to Psychology Today, patients should introspect between sessions for best results. Furthermore, one of the best ways to do this is for patients to articulate their thoughts through journaling. However, patients often forgo this technique, resulting in less effective treatment and an inability to track progress. Currently, limited journaling options have combated patient motivation to journal and have made this lack of introspection a continued issue that threatens to devalue therapy. Without a technological solution, patients have limited journaling options and often must resort to traditional pen and paper. However, this physical approach has proven to be extremely limiting and often overwhelming. When faced with only a blank page for inspiration, patients may be dissuaded from journaling without appropriate prompts and personalization. Because of these obstacles, patients miss out on journaling benefits like organizing their thoughts, enhanced self-reflection, and a fully-documented, linear track-record of therapy progress. Essentially, while this problem persists, many patients simply forget about and do not reflect on important insights made during session.
<h3>Related Work</h3>
Problems with mental health have historically been solved through interpersonal relationships. Therapy, support from family and friends, and clinical help are oftentimes the ways in which mental health issues are addressed. However, approaching such issues from a technical perspective is an opportunity that has largely been overlooked. A related digital platform that supports a technical note-taking approach to mental health is Kip, an app that allows users to schedule therapy appointments and take notes after the experience. A blank page can be intimidating, especially to those not used to journaling or sharing their thoughts at all. A digital note-taking app like Kip is little better than a paper notebook; it provides none of the guidance, interaction, or specialization that many people need when expressing themselves. While an app or web platform can never replace the benefits of person-to-person interaction or the support of friends and family, it can help people in between therapy sessions or during those times when other people can’t be around. After a patient finishes a session, there is little communication between therapist and patient that occurs before the next session, which can not only hinder a patient's progress but also lead to a mental health crisis. Thus, this problem is conducive to a technical solution, since linking patient and therapist through technology for fast communication and progress-sharing can alleviate this issue
<h2>USER RESEARCH</h2>
<h3>What we wanted to learn</h3>
In general, we wanted to gauge the current demand and practices regarding mental health journaling. We did this by asking individuals the following questions:
    
    1)  I am taking a class in Human-Computer Interaction in which I have to work on an interface design that addresses a problem. I am not testing or judging you, I just want to better understand your experiences and am interested in learning how people deal with this problem area. How do you experience the problem of forgetting what you learned in therapy? How do you address it?
    2)  Do you ever take time outside of therapy to self-reflect on what you learned in therapy? Tell me about a time that you did this.
    3)  What tools do you currently use in therapy to increase effectiveness of therapy?
    4)  What do you wish you could improve about your therapy experience?
    5)  Pen and paper vs technology when journaling?
    6)  Do you journal about your therapy experiences and if so, how often? How has it helped or not helped you? If you don't journal, why not?
    7)  Do you and your therapist currently measure progress made in therapy and if so, how?
    8)  Do you communicate with your therapist in between sessions and if so, how?
    9)  In your opinion, how much information do you retain or lose in between therapy sessions?
    10) If you had more guidance and prompts about your mental health status, would you journal?
    11) How much support do you get from your therapist in between sessions?    
    12) What level of privacy would you want in a journaling process that is shared between you and your therapist? What about privacy in a journaling app? 
    13) Overall, do you have any feedback on journaling for therapy?
<h3>Research Approach</h3>
We took the approach of interviewing because the topic surrounding the problem statement is related to mental health and is very sensitive. Thus, it wasn't possible to observe someone going through their therapy session and it was a better option to interview a patient anonymously to  better understand their experiences. From our research, we hoped to learn how the interviewees approach the issue of forgetting what they learned in therapy after engaging in therapy and how they communicate with their therapist in between sessions. Thus, some of the questions that we asked include "How much information do you retain or lose in between therapy sessions?" and "How much support do you get from your therapist in between sessions?"
<h3>What we learned</h3>
Overall, we learned that journaling is only effective if it meets the individual needs of the user. Therefore, a digital journaling tool would only serve its purpose if it was uniquely catered to the therapeutic needs of each individual user. We learned that the users want journaling as a processing tool to introspect and collect their thoughts in between their therapy sessions. We also learned that journaling is indeed effective if it meets the processing needs of the user. One interviewee did offer some surprising insights about the differing types of therapy and how the tool would need to be relevant and individually catered to the user. We think that this level of personalization is going to be the most challenging attribute to implement when speaking of pain points. Furthermore, she did confirm the team’s assumption that therapy patients often forget about insights made from session to session, which serves as an obstacle to progress. Thus, we confirmed that implementing a concrete progress-tracking tool would be a significant innovation in this field.    
<h2>PAPER PROTOTYPING</h2>
Video Clip: https://youtu.be/vSg2L5BzO5Y
<h2>HIGH-FIDELITY PROTOTYPING</h2>

The **First Task** we approached was signing up, logging in, and viewing user profiles. If they don’t already have an account, users can create one and log in, at which point they are then immediately taken to their personal dashboard; otherwise, they can go straight to the login page, enter their credentials, and be taken to their dashboard. Depending on whether they register as a patient or a mental health professional, different dashboards are displayed to the user. Each page is linked, so users can navigate the platform seamlessly when completing this task.

Link to use: https://youtu.be/psf3WkkiTGA

The **Second Task** we implemented was a journal entry feature. When the user accesses the journal hub, they can now click on the plus sign to access today’s prompt. In this page, they can journal about their therapy experiences and use the prompt as inspiration for their journaling. They can choose to paperclip their notes, which makes them private, or they can make them public for their therapist. Lastly, users can also input their mood in the slider, which submits data to be plotted by the progress tracking chart. The journal entry feature has also been added to the therapist dashboard, where the therapist can see their patient’s notes and choose to contact them.

Link to use: https://youtu.be/0gz7WZlrZ7g

Our **Third Task** was to implement an interactive data visualization component to track the mood of a user over time. We found a method to save journal entries and mood slider data from our users, and have created a mood based progress report that updates each time new data is retrieved from a user. We have also included saved journal entry previews, an FAQ page, and an About Us page.

Link to use: https://youtu.be/fjt3Iyck6tA

<h2>COMPONENTS IMPLEMENTED</h2>

For our **First Round** of prototyping, we chose to implement a component that would allow users to create individual profiles in which to store information. To access the profiles, we created login and register pages that support two kinds of users: patients and mental health professionals. Our login page uses an email address as a username and requires a password. The password field must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters. The email field must contain an &#39;@&#39; symbol as well as a website name following the &#39;@&#39; symbol. The form also adheres to the guidelines for good form design. Both pages are accessible from each other - that is, you can access the login page from the register page and vice versa. In the case that a user attempts to log on without entering information, a pop-up will appear asking the user to first input information into the textboxes. Through this feature, patients can access their personalized insights, journal entries, and previous chats while keeping this data securely stored.

Link to use: https://youtu.be/psf3WkkiTGA
![Login](images/Login.png)
![Sign Up](images/SignUp.png)
![Login Message](images/LoginMessage.png)
![Sign Up Message](images/SignUpMessage.png)

For our **Second Round** of prototyping, we chose to implement a component that would allow users to create new entries and input their mood rating - a data collection form. To access the journaling page, we created a new page accessible from the journal hub in the dashboard. Once in this page, users can enter an optional title for their notes and use the provided prompt as a starting point for their journaling. There are also three icons next to the journal: a save button, a ‘done’ key, and a paperclip option. The paperclip option is used to make notes private/public. When clicked, a popup appears informing the user of the privacy status of their current notes. Additionally, the page collects another data component, a mood rating. Users can use the slider to reflect their current mood state, and this data is recorded by the progress tracking chart in the dashboard.

Link to use: https://youtu.be/0gz7WZlrZ7g
![Journal Hub](images/JournalHub.png)
![Journal Page](images/Journal.png)

For our **Third Round** of prototyping the component we created is a line graph that tracks a user’s mood over time. This component exists on the user dashboard. When a user creates a new journal entry, they are also introduced to a mood slider on the top right of the journaling page. This is where the user can input their mood on any given day. When the user inputs their mood, the data is then stored and the mood progress report on the dashboard is updated with the new data point.

Link to use: https://youtu.be/fjt3Iyck6tA
![Mood Progress](images/Mood.png)
![Mood Bar](images/Mood2.png)

<h2>REFLECTION</h2>
<h3>What we accomplished</h3>
Our final deliverable is a largely front-end template of what we would imagine our final website to be when finished. The most important functions of our page have been implemented, with most of our focus on the journaling interface. Journal entries and mood progress can be saved in local storage and created and viewed easily, and we have also begun working on a privacy feature to share/unshare entries with therapists (in progress). We put a lot of focus into the aesthetic of our website as well, it looks like a finished product. We were also able to create About Us & FAQ pages as well as information collection forms for logging in and creating an account. We have a template for a chat room feature too, but we have not implemented its functionality. Overall, we feel as though we have created a great first prototype, but it is definitely not a finished product.
<h3>Next Steps</h3>
If we had more time to work on this project, we would begin to work on the backend and connect the site to a database. We would add a way to make personal accounts and save journal entries for different users. We would also implement the chatroom feature and polish off the aesthetic of the site. May, who came up with the idea for this project, is also considering moving this project to a mobile platform. We may take this project to The Garage to build on it and rework it for mobile, or expand on the website we have already created. We think we would also need to begin working with mental health experts in more depth if we continued to pursue this in any commercial way considering that this app would ultimately be used by mental health professionals and should reflect their needs and expertise.
<h2>LINKS</h2>
A link to our repository : https://github.com/jot-hci/jot

A link to video of prototype: https://youtu.be/wQyG1CM_Zgs

Best viewed on Google Chrome, see video on how to navigate our site.
<h2>SOURCES</h2>
 Howley, E. K. (2019, June 26). What Mental Health Statistics Can Tell Us. Retrieved January 21, 2020, from https://health.usnews.com/conditions/mental-health/articles/what-mental-health-statistics-can-tell-us
 
  Howes, R. (2011, January 26). Journaling in Therapy. Retrieved January 21, 2020, from https://www.psychologytoday.com/us/blog/in-therapy/201101/journaling-in-therapy

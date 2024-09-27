---
layout: post

title: "Collaborative Risk Analysis & Pre-Mortems"
description: An introduction to collaborative risk analysis techniques and tips on how to successfully apply them within your team
summary: Does your team understand the biggest threat to your project? Every project involves risks, but finding practical ways for cross functional teams to contribute to risk management can be challenging. This guide introduces some different collaborative exercises and provides advice on how to help your team take ownership of the risks which could threaten your success.
date: 09-09-2024
author: Andrew January
role: Lead Test Engineer
bio: Andrew is a Lead Test Engineer at Scott Logic. He's spent his career working in agile delivery teams in organisations ranging from start-ups to large retail banks. He enjoys challenging some of the common misconceptions around software testing and helping teams to develop a shared understanding of quality.
profile: risk-analysis-and-pre-mortems/profile.webp
---

## Introduction

In this guide we will be discussing the nature of risks, highlighting some potential problems with traditional risk management approaches, introducing the concept of a Pre-mortem and providing some practical advice on how to implement new techniques in your team.

This guidance is aimed at any role working in a project or product team. You don't need to be a team leader, an expert in project management or risk management. All you really need is some knowledge of your team's goals and some willing teammates.

## Risky Business - The Problems with Traditional Risk Management

Software development is inherently about dealing with uncertainty, unknowns and sometimes surprises.

Any non-trivial software project involves risks. Your team could be developing an internal tool to manage the stock of office kitchen snacks or you could be on a high profile client project migrating a legacy monolithic system to a microservices architecture. Each of these contexts involve risks which could impact your team's delivery and which your team might be accountable for.

Risk management is all about anticipating risks, understanding their likelihood and impact, and identifying actions to mitigate them. But what do we mean by risks?

In the context of a software project, risk tends to be presented as three overlapping categories.

- Project risks : Anything that might threaten the success of your project.
- Product risks : Anything that might affect the quality of the software you're delivering or impact your users.
- Business risks : Anything that might affect the wider organisation outside of your project.

 Approaches to managing these risks will vary depending on the context of your project. You might already be familiar with lightweight techniques such as SWOT analysis, which can be used to build a high level profile of risks for a project. Some organisations might define more in-depth and formal processes with distinct stages for risk identification, analysis, planning and monitoring.

So where are the problems?

### Engagement

The world of risk management can be a daunting place full of professional bodies, standards, formal certifications and role titles containing the word 'risk'. Whilst some form of risk management is likely to be familiar to people who've worked in a project or delivery manager role, it can be difficult for other roles to understand how and where to engage with a process. 

Some perspectives on project management and software delivery might even frame the management of risk as the responsibility of project managers alone. As a result convincing a whole cross-functional team that risk is a thing they should be openly discussing together and proactively managing can be challenging.

### Relevance

Risks management is ideally an iterative process which is regularly revisited and updated as a project evolves. However in some contexts this process might be reduced to being a one time activity at the very beginning of a project such as a risk workshop. Risks that seemed important to highlight during this initial inception phase might not remain relevant for long.

Some risk management techniques might only provide a limited perspective by focusing only on high level business or project specific risks. These types of risks might not seem particularly relevant or attention grabbing to a team member who is currently focused on day-to-day implementation work and working towards delivery milestones.

Identifying an arbitrary number of risks is unlikely to save a project from potential disaster, as is attempting to create an exhaustive list of all the possible risks threating a project. Some sensible judgement is needed to define a limit on how far to go when identifying potential risks.

### Visibility and Communication

The way in which some traditional risk management approaches are applied might lead to a confusion between identifying and recording risks and actually trying to mitigate and monitor them. This could lead to the assumption that because a risk has been recorded in a risk register document it has been effectively mitigated. In reality, it might just have been safely stored away never to be discussed and reviewed again.

Some organisations might have specific governance roles who are responsible for risk management and defining processes for delivery teams to follow. The visibility of this work and how effectively this role communicates is likely to impact a delivery team's ability to respond to risks. There's potential here for complacency, where teams assume that risk is someone else's responsibility or that if they follow an official governance framework and 'tick the box' they'll be fine.


### Organisational Context & Culture

A team's perspective on risk might be influenced by the context and culture of an organisation. A small scale startup might have a relaxed attitude towards risk and might intentionally encourage risk taking behaviours. A highly experimental, 'failing fast' culture without formalities might be entirely reasonable in this context. A well established financial organisation, operating in a highly regulated industry and serving millions of customers daily is unlikely to share the same attitude.

Some organisations might associate formal risk management processes with a more waterfall style methodology and have challenges in understanding where risk management fits alongside modern agile software development approaches.

### What are the alternatives?

In the following sections we'll introduce some collaborative techniques inspired by concepts from cognitive science and psychology. Each of these techniques attempts to counter some of the problems with traditional approaches to risk management. Experimenting with them should help your team to recognise the significance of risks in your project context. Longer term you might be able to build upon your team's experience and help to establish a lasting change in perspective on risks in your organisation.


## What is a Pre-Mortem?

Hindsight is amazing. With hindsight every production incident, bug, oversight and misinterpretation of requirements is obvious and preventable. Post-mortems or Major Incident Reviews are also great. With Post-mortems/MIRs we aim to build an understanding of the domino effect of small yet interconnected failures which lead to an incident. If we’re lucky we might even find some root causes and perhaps identify some specific improvements to build confidence that it won’t happen again.

Hindsight is also deeply flawed. Hindsight is actually little more than a convenient narrative based on poorly remembered facts. In Thinking, Fast and Slow, Daniel Kahneman describes the poor performance of our brains to remember past events accurately. He goes on to explain the impact hindsight bias has on decision making and how when we evaluate past decisions, we naturally tend to overly emphasise the outcomes of decisions rather than the process.

What if we had something more objective than hindsight? What if we could reduce the impact of our cognitive biases? What if instead of trying to remember where we went wrong we could attempt to predict and pre-empt our failures?

A pre-mortem is a technique which attempts to counteract some of the common cognitive biases which can negatively impact decision making amongst teams. Gary Klein is often credited with popularising the Pre-Mortem, whilst Kahneman has explored both the underlying cognitive science and the potential benefits. In particular Kahneman highlights two key benefits the technique can bring to teams when they are in a planning or decision making mode.

### Unleashing imagination

Kahneman discusses the role of a common cognitive bias which he names What You See Is All There Is (WYSIATI). Whilst WYSIATI can be useful in helping us to make quick and intuitive decisions based on only partial information, it can also lead us into the trap of jumping to conclusions without all the facts. 

Pre-mortems encourage us to think about situations that haven't yet occurred and therefore rely on us using our imagination. The importance of this is that it nudges us away from defaulting to our existing models of the world. By limiting the impact of WYSIATI pre-mortems allow us to critique a project or system in a way that enables us to actually start to learn new things about it, rather than just confirming what we already know.

### Countering groupthink

It can be easy for groups to fall into the trap of prioritising conformity over critical thinking. Kahneman explains that as a group approaches a decision the phenomenon of groupthink begins to impact their behaviour. The group's confidence tends to increase and any doubts or alternative opinions tend to be gradually suppressed. Opposers of a decision might tend to be perceived as obstructive to progress, lacking in commitment to the group or simply not understanding the group's goals. Pre-mortems attempt to prevent uncritical optimism from becoming the default of a group by exploring different perspectives and using these to inform better quality decisions.

## Experimenting with Collaborative Formats

Concepts from the realms of cognitive science, psychology and risk management aren’t easy to introduce to a team. Convincing people of there practical value in day to day work is even harder. However, if you disguise them as a collaborative gamified group exercise you might have a lot more buy in and suddenly have a new recurring ceremony to add to your SDLC.

In this section we'll introduce some different collaborative formats of risk management and pre-mortem techniques. Each of these consist of a series of group activities which mirror the Risk Identification, Risk Analysis and Risk Planning stages of a traditional risk management process.

### The Classic Pre-Mortem

The classic format of Pre-Mortem focuses on working backwards from a hypothetical disaster scenario and asking the questions 'how?' and 'why?'. Kahneman suggests that this is most effective when applied just before a group agrees upon and commits to an important decision. Below are a series of steps to guide you in applying the classic pre-mortem format to your project.

#### Preparation

Organise a meeting with a group of people knowledgeable and accountable for the project, product or decision you will be critiquing.

Invite a diverse group of people to the session. To be really effective you'll need a broad range of experience, seniority, skill-sets, roles and perspectives. Don't limit your invitation to just the immediate dev team or 'technical' roles. Include anyone who could be accountable for or impacted by your project being a disaster. There might even be value to inviting domain experts or technical experts who aren't directly involved in your project. If you're struggling for ideas of who to invite, think back to the people you met during your [first few weeks on the project](https://scottlogic.github.io/practitioners-guides/pages/project-week-one/).

#### 1. Set The Scene

Briefly review the current state of your project, plan or important decision as a group.

Now set the scene using a short speech to frame people's thinking. Below is a suggestion from Klein. Adapt this to your current context and the time frame of your project.

_"Imagine that we are a year into the future. We implemented the plan as it now exists. The outcome was a disaster. Write a brief history of that disaster"._

#### 2. Identify failure reasons

Allow a short amount of time (e.g. 5-10 mins) for each person to draft some potential failure reasons. Deliberately constraining the time might be beneficial here as it might help people focus on more significant or interesting reasons rather than a whole long list of vague potentials.

In turn encourage each person to share their failure reasons until all the reasons have been shared (regardless of how plausible or detailed they are).

Record each of the reasons.

#### 3. Revise the plan

Review the current plan against the list of potential failure reasons your group has identified.

Can you find ways to strengthen it against these newly identified risks?

A tried and tested classic, this is a low effort format which could be applied to any context and expanded upon to suit your team's need. However, there are some potential weakness of this format to watch out for.

It could be assumed by the attendees that the pre-mortem is just another part of a traditional risk management approach and therefore largely a project manager's responsibility to conduct the exercise and own the outcomes. Gary Klein himself frames it this way [in his Harvard Business Review article](https://hbr.org/2007/09/performing-a-project-premortem), where he suggests that a project manager reviews the list of failure reasons after the meeting, presumably individually without input from the team. Klein also suggests that the first person to share their ideas should be the project manager!

Can you spot the potential problems here? We're defaulting back to risk being perceived as something for project manager roles to own and there's not much encouragement of shared responsibility.

So what could we do differently to improve upon this format?

### The Nightmare Headline Game

In _Explore It!_ Elizabeth Hendrickson proposes a variation on the classic pre-mortem which has a more specific focus on software testing and quality. The Nightmare Headline Game re-frames the exercise as a technique for defining testing approaches for high priority areas of a system. The intention here is to shift the mindset of roles which might be biased towards creation and optimism into thinking more critically about the potential weakness of their products.

Below are a series of steps to guide you in preparing for, conducting and getting the best outcomes from the Nightmare Headline Game format. At first glance, these steps will seem very similar to those of the classic pre-mortem. However, the last step is where the real value of this variation emerges. The outcomes of this format should be more tangible with clearer ownership of actions as the team is encouraged to define next steps together during the session rather than this being done in isolation by a team lead or project management role.

#### Preparation

One of the outcomes of this session will be a collection of exploratory testing charters. If you're unfamiliar with the concepts of exploratory testing and charters it's worth doing some brief upskilling. If there are people in the organisation with experience of these, get them to provide a brief introduction to you.

If software testing isn't your area of expertise, seek out colleagues who are currently working in testing roles or have previous experience in these roles. Ideally you'll want to have at least 1 testing professional attending the session. Their perspective will be valuable in this format and they might be required to take a lead on supporting the group as they draft exploratory testing charters during the final stage.

You might want to create a template or some example exploratory testing charters in a tool of your choice, for example Jira, GitHub markdown or a Word document.

If you're conducting an in-person session you'll need:
- Post it notes
- Pens
- A whiteboard or large piece of paper to gather the post it notes on and to act as a focus point 
- Optionally a screen to share content

If you're conducting a remote or hybrid session prepare a digital board using a tool of your choice before organising the meeting. You can find more detailed guidance on how to prepare for a remote or hybrid session in our [Remote Workshop Readiness guide](https://scottlogic.github.io/practitioners-guides/pages/remote-working-readiness/).

#### 1. Set The Scene

Similar to the classic pre-mortem, you'll need to frame people's thinking and encourage them to be imaginative. Start by sharing some real world examples of news reports of well known software failures to frame peoples thinking and provide some inspiration. Even better if you can find a story specific to your project domain.

You might even have stories of your own to share. Were you a customer who was impacted by a high profile production incident? Did your previous employer make the front page of a major news website for all the wrong reasons? For some inspiration, checkout Gojko Adzic's _Humans Vs Computers_ which is a well referenced [collection of stories of famous bugs](https://gojko.net/books/humans-vs-computers/) and system failures. They range from the hilarious and slightly annoying to the terrifying and deadly. 

> ##### Top Tip
> There's a balance required here between sparking the team's imagination and accidentally constraining their thought process or biasing them into reproducing previous stories. More experienced teams might not need much in the way of prompting. Adjust this to the context of your team.

#### 2. Draft Headlines

Once they're familiar with some examples, ask the group to imagine that they've checked their news or social media feeds that morning and discovered that the software they work on has made headline news for all the wrong reasons!

- Ask the group to create at least 1 imaginary disaster headline story each
- Record the headlines somewhere visible such as a post it note on a whiteboard or as a ticket on a digital board
- After a set time limit have the group share each of their headlines
- Prompt them to elaborate on the following:
    - Why does it matter?
    - What was the impact to users?
    - What was the impact to the organisation?

The beauty of this format is how open-ended it can be. Headlines can be deliberately sensationalist and attention grabbing, or contain specific technical details which resonate with the teams current work. No idea is too outlandish, silly or unrealistic.

#### 3. Decide on the highest priority risk

After the group has shared and recorded their headlines ask them to review the collection and identify a single scenario to investigate in more detail. Hendrickson suggests applying a short multivoting session during this step.

If you feel the team needs prompting consider asking the following questions:
 - Is it realistic?
 - Is there a clear impact?
 - How many unknowns are there?
 - Is it reasonably within our control?

 The use of intuition in justifying a choice is also perfectly valid here. Someone might not be able to fully articulate why they feel a scenario is important. It might be more of a sense of "There's something here that worries me, but I'm not fully sure what...".

#### 4. Discuss potential contributing causes as a group

As with the classic pre-mortem format, the purpose of this stage is to analyse the chosen scenario and break it down into some potential contributing causes. It's also where you'll gain valuable insight into your colleagues' different perspectives on risk and quality. There are lots of opportunities for knowledge sharing and clarifying understandings here. It's wise to try to put some time constraints in place and to be mindful of keeping the discussion focused on the chosen scenario.

For people who have experience with Root Cause Analysis there might be a temptation to apply some known techniques at this stage. Something simple like the '5 Whys?' technique could be helpful for prompting the group if they're struggling to break down the scenario into causes. However, it might also constrain people's imagination and influence their thinking towards finding a more familiar, plausible or 'correct' set of causes.

- Ask the group to suggest potential contributing causes to the chosen scenario.
- Briefly discuss each cause.
- Ask clarifying questions, but try to avoid limiting people's imagination, biasing their approach or seeking agreement from the group.
- Record all the proposed contributing causes.

As an optional addition to this step, ask the group to consider what signals or symptoms they might notice which could suggest this situation is about to occur. This step is attempting to encourage teams to consider how the observability and testability of a system can contribute to their ability to anticipate problems. Some caution is needed here. People without experience of these concepts or who work with systems without a good level of maturity in this area might find this a bit distracting.

#### 5. Create exploratory testing charters as a group

This is the interesting part where the value emerges! In contrast to the classic pre-mortem, the final stage involves reviewing and discussing the list of contributing causes as a group in the open. The group then all contribute to defining exploratory testing charters based on their discussions. Ideally you'll want this step to be as collaborative as possible.

Organise the team into several pairs or small groups. Allocate each group a contributing cause or have them chose one which interests them.

Task each group with defining exploratory testing charters which might help expose the contributing cause. This is a great opportunity for the testing experts in the group to take the lead on guiding people who might be unfamiliar with the concepts of exploratory testing using charters.

>##### Top Tip
> Make sure you record the charters using a tool and format which is easily accessible to the whole team. Hendrickson recommends using a simple template and avoiding making charters overly prescriptive. The example format below is similar to the classic 'As a user..' format of agile user stories and should work as a good starting point. It captures the 3 important aspects of a charter, the target to explore, the resources needed and the information you intend to find.
> 
> Explore the login page,
>
> With an accessibility audit tool and the WCAG 2.0 standards,
>
> To discover potential accessibility issues

Have each group briefly share at least one of their charters, explaining how it relates back to the contributing cause they were allocated and the original headline which was chosen by the group. Check that the target, resources and discovery goals are understandable for the rest of the group.

The 'diverge and merge' format of this stage should help to increase the participation of each individual in the group and enable more charters to be created in a shorter amount of time.  You could consider placing a limit on the maximum number of charters or a time limit if you feel the group might need a definition of when to stop.

Make sure you commit to using the charters! It might be helpful at this point to assign ownership of them to a specific person or agree to bring them into the next team planning or prioritisation meeting.

#### 6. Closing the session

Oh no! You've introduced doubt and potentially reduced the default optimistic view some attendees held. There might be a sudden sense of unease amongst the group due to potential changes in confidence around existing functionality, requirements and project deadlines. You might have even gone far enough to dispel a long standing illusion that everything in the project is perfectly fine. 

>##### Top Tip
> Managing your business stakeholders' expectations is going to be key here and it's another very good reason to invite them along to the session, rather than surprising them with the outcomes later.

As a future action someone is going to be responsible for executing the exploratory testing charters you've defined and reporting back on their discoveries. It's important to be mindful of what impact this will have on the current state of the project and on any teams involved.

- How will the outcomes of your exploratory testing impact the current priorities, workload, velocity and morale of development teams?
- How will your stakeholders react when you announce that your exploratory testing has discovered missing requirements, unknowns, inconsistencies and potential headline making bugs?
- What will it take to restore the confidence people held prior to running the session?

### Risk Storming

Risk Storming is a gamified and collaborative test strategy exercise which has been popularised by the Ministry of Testing community. This exercise aims to make discussions about testing and risks accessible to a whole cross-functional team and encourages them to take shared responsibility of quality. The game uses the Test Sphere card deck and a simple game board to focus the group as they work through the 3 phases below.

1. The team identifies the 6 most important quality aspects to their product (e.g. performance or accessibility).
2. The team suggests risks which might impact the quality aspects.
3. The team attempts to mitigate the risks using known testing techniques, quality heuristics and patterns.

The Ministry of Testing provide a set of [official Risk Storming instructions](https://www.ministryoftesting.com/testsphere/riskstorming), detailed explanations of the 3 phases and free resources to support hosting a session.

As with the classic pre-mortem and the nightmare headline game, encouraging the use of imagination and the sharing of different perspectives are at the core of this format. However, rather than working backwards from hypothetical disaster scenarios, Risk Storming uses the concept of software quality aspects to frame the group's thinking. It also provides opportunities for testing experts to subtly introduce or reiterate concepts such as heuristics. The result is often a collection of more relevant and actionable risks.

Although originally intended to be focused on a whole product owned by the team, Risk Storming could be adapted to other contexts. For example it could be applied to the scope of a whole project, a specific release, or even [refactoring work]( https://www.ministryoftesting.com/articles/community-stories-who-is-your-customer-a-riskstorming-story?s_id=18211552).
 
It's important to acknowledge that this card game inspired format might not work well for some teams, particularly if they work within a more formal organisational culture or an environment where collaboration between different roles is currently challenging. There's also some expense needed to purchase either the physical cards or a subscription for the digital version.

If you think your team can handle the potential overheads of new terminologies and game rules this can be a really fun and rewarding exercise. As with all good card games there’s even a TestSphere expansion pack featuring lots of new cards relating to observability!

![riskstorming1]({{ site.baseurl }}/media/risk-analysis-and-pre-mortems/riskstorming1.jpg)

#### Identifying Quality Attributes

During the initial phase of a Risk Storming session the different perspectives of quality within the team will begin to emerge. There might be some people who think of quality purely in terms of functional correctness and if a feature 'works as intended'. Others might consider functionality as implied and have a preference towards valuing accessibility, security or performance. Neither of these opinions is more or less valuable to the team. If the team have doubts about the importance of a particular quality attribute try to allow some short time-boxed discussions.

The suggested default limit of 6 quality attributes is really here to encourage prioritisation, reduce the scope of the 'storming' phase and get people thinking about potential trade-offs. Some teams might find it challenging to commit to a small subset of quality attributes. Try to remind the team that prioritising some quality attributes doesn't mean that the remaining quality attributes are irrelevant or unimportant.

> ##### Top Tip
> Depending on the team's context and level of testing maturity some quality attributes might be completely new to some people. This in itself is a valuable signal. Don't ignore it! Instead consider what you can learn from this as a team. Are you exposing a lack of understanding of testing roles? Are there future opportunities here for your testing experts to work more closely with other disciplines?

#### Suggesting Risks - The 'Storming' Part

Once the team have agreed upon a set of priority quality attributes the storming phase can begin. If you already have experience with the Pre-Mortem and Nightmare Headline Game formats, this phase will be familiar. This phase is all about the team generating ideas, identifying potential risks and sharing perspectives. The quality attributes should help to frame the teams thinking and drive discussions around the risks relevant to a product or project.

As the team suggest risks be aware of emerging signals and themes.

- Are there a large number of risks clustered around a particular quality attribute or product feature? 
- Are duplicate or very similar risks being suggested? 
- Are there quality attributes which are suspiciously quiet and which the team are now questioning the relevance of?

![riskstorming2]({{ site.baseurl }}/media/risk-analysis-and-pre-mortems/riskstorming2.jpg)

#### Risk Mitigation

Teams sometimes struggle with the third phase of the exercise where heuristics, testing techniques and patterns are selected to mitigate the identified risks. Whilst the TestSphere card deck does a great job at presenting these testing concepts in a nice format with good examples, it might become distracting for some team members who are unfamiliar with software testing terminologies. 

There might be a temptation at this point to cut this phase short and wrap up the session or to take this work away as a follow up action outside of the collaborative space. Be mindful of this and think back to the final phase of the classic pre-mortem format where Klein suggested a project manager dealt with the outcomes in isolation. What will you be missing if this risk planning work excludes the team?

#### After the Storm

The official Risk Storming guide suggests documenting the outcomes of the session using a mind-map or formalising it into a high level test plan. As with the Nightmare Headline format, be prepared for additional actions for the team to own and for the reactions of your stakeholders.

Beware of the temptation to turn the outcomes of your Risk Storming session into a global 'one size fits all' testing approach which can be applied to every team and system in your organisation. Remember that the context of each team, its people, day-to-day work and goals are key to successful testing. 


## Other Considerations

### Atlassian’s Pre-Mortem Template

Atlassian provide a [Confluence template](https://www.atlassian.com/software/confluence/templates/premortem) for quickly starting a pre-mortem session. This seems to suggest splitting participants into 2 groups who take on opposing roles of optimists and pessimists.

Whilst this seems like a novel and interesting approach to pre-mortems, you might want to exercise some caution with formats like this. Encouraging imagination and the sharing of new and diverse ideas are key to a successful pre-mortem. There are some potential risks with this format of reinforcing existing biases, organisational power imbalances and emphasising competitive behaviours over collaboration. Imagine a session where the 2 opposing teams are split based on seniority or job title. Would this be beneficial for the team and the project? Or would it lead to status quo bias and groupthink behaviours?


## Common Guidelines

Regardless of which format you chose there are some common guidelines which can be helpful to refer to when preparing for and conducting a pre-mortem session.

### Experiment and Demo

Test out new pre-mortem formats with an example product or system before applying for real. This gives you and your colleagues the opportunity to get comfortable with a format, deal with some of the potential logistical problems and understand where attendees might need support. If you feel you need some more detailed guidance on organising remote or hybrid workshops [checkout our guidance here!](https://scottlogic.github.io/practitioners-guides/pages/remote-working-readiness/)

It can sometimes be useful to separate the format from the real world context of your organisation to allow people to focus on learning. Substituting a real project or system with something simpler is a good starting point. If you're stuck for ideas [the Ministry of Testing](https://www.ministryoftesting.com/testsphere/riskstorming) suggest performing a Risk Storming session on Iron Man's suit or the Death Star.

There are good opportunities to have fun and boost engagement here. However, remember to be inclusive with your choice of example systems and domains. The idea is to enable the group to learn something new, in a safe environment and build their confidence. If some of your colleagues aren't familiar with _Star Wars_ or the Marvel Universe you might accidentally make it harder for them to contribute and learn if you theme your example session around these stories. 

Try to pick something which might be more likely to be familiar such as a mobile banking app, cash point machines or restaurant order systems. If you're in doubt about how appropriate a choice might be, consult your team first and get agreement before organising the session.

### Share The Workload

Facilitating any type of meeting, agile ceremony or workshop and dealing with the outcomes can be a significant amount of unseen work. Be prepared to share the hosting and admin responsibilities as a team. If you have team members who are looking to gain more experience with hosting collaborative sessions try to understand how you can support them and set them up for success.

### Practice Psychological Safety

Some people might not have a fully formed or easy to articulate argument for why a risk is significant or a quality attribute is important. Important risks might emerge from someone simply sharing a vague opinion or an intuition that "something around this part of our system worries me...". Try to encourage an environment where people are able to share ideas freely, even if those ideas are incomplete or if the person is lacking information.

### Observe and Prompt

Some people might find it challenging to feel productive during collaborative exercises, particularly if they introduce new concepts and terminologies. Be prepared to clarify the expectations of the format and each of its stages and provide examples. If you notice that some attendees are finding it difficult to contribute to a large group you could try applying the 'diverge and merge' technique (see the Nightmare Headline Game format) to encourage more engagement in smaller groups.

During each phase be aware of potential patterns or themes which might emerge, but be mindful of the impact of drawing attention to them. Ask yourself if this will be helpful for the team at this point? Or will doing this have an unintended effect of introducing bias, breaking the creative 'flow' and constraining peoples creativity?

Keep an eye on the time! Good time keeping is crucial to keeping peoples minds in the mode of critiquing and to prevent in-depth discussion from becoming a distraction. With the Risk Storming format in particular it can be quite challenging to keep within the suggested durations for each phase. During a session or phase try to remind the group of how much time has elapsed or remains. If you notice that certain topics are starting to dominate discussions can you highlight this and refocus the team on the purpose of the current phase? 


### Visualise The Failure

If you find team members are struggling to articulate risks or failure reasons, could a simple drawing or diagram help? This might also help make your session more accessible to people who find large amounts of text difficult to process or for people who don't speak or read English as a first language.
 
Causal diagram formats such as Ishikawa diagrams or simple process flows might help a team to visualise the path to failure for a specific scenario. If you chose to do this keep it simple and try not to let it distract from the goals of the session.

## What Next?

Hopefully your collaborative risk management/pre-mortem session was a success and your attendees leave the session inspired with new ideas and with a better appreciation of each others individual perspectives on risk and quality. So what now?

Conducting a pre-mortem once doesn't mean all your risks are discovered, understood and soon to be mitigated. It should inform your next steps. Below are some suggestions of next steps you can take after your session. Each of these should be applicable to each of the formats introduced above.

### Communicate, Investigate and Review

- Document your newly identified risks and contributing causes using a format and tool which is accessible to all of your team and stakeholders.
- Review and update your team processes and Ways of Working documents. Have your risk sessions highlighted gaps in the way your team currently operates?
- The group might have gained some insight into the wider state of testing and quality in the organisation. Are there things you need to investigate further?
- You might have exposed some misconceptions about the nature of testing and testing roles. Can you use the success of your session to amplify the relationships between testers and other roles?
- Regularly revisit the risks you’ve identified and use them to inform testing approaches. Highlighting relevant risks on specific tasks, agile user stories, epics, sprints, or releases might be valuable.
- Conduct some exploratory testing sessions and focus on high priority risks. You might discover new things about your existing systems.
- Use your new perspective to question anything from your automated test coverage through to your delivery plans and product roadmaps.
- Review pre-mortems against production incidents or bugs. Did they prepare you for actually dealing with real world risks? Were there any significant gaps in the pre-mortems outcomes?

### Feedback and Learnings

- Gather feedback from your attendees, review it and use it to inform future risk analysis sessions. 
    - Did the team struggle with a particular testing terminology? 
    - Did you identify gaps in technical skills or domain knowledge?
    - Would a different format suit your team's current context or the culture of your organisation better?
- Consolidate your learnings. Perhaps write a short summary of your experience and share it with others in your organisation.

## Conclusions

During this guide we've introduced the concept of a pre-mortem and several practical formats of pre-mortem and risk analysis techniques you can share with your colleagues. You will have also gained an insight into some of the challenges of risk management in the context of agile software delivery.

Armed with this new knowledge you can empower your team to discuss risks in a way that is relevant to your project context and which is accessible to a wide range of roles.

Discussions on risks don't have to be reserved for project management roles or driven by governance, statistics and probabilities. They can be for the whole team and be collaborative, imaginative and fun!

### Sources, Inspirations & Further Reading

[Kahneman, D. (2011). Thinking, Fast and Slow, ](https://www.goodreads.com/book/show/11468377-thinking-fast-and-slow)

[Slovic, P. (1987). Perception of risk. Science, 236(4799), 280–285.](https://doi.org/10.1126/science.3563507)

[Klein, G. (2007). Performing a Project Premortem](https://hbr.org/2007/09/performing-a-project-premortem)

[Hendrickson, E. (2013). Explore It! Reduce Risk and Increase Confidence with Exploratory Testing](https://pragprog.com/titles/ehxta/explore-it/)

[Adzic, G. (2017). Humans Vs Computers](https://gojko.net/books/humans-vs-computers/)

[Jiang, S. (2021). How To Run A Remote Risk Storming Workshop With Testsphere](https://www.ministryoftesting.com/articles/how-to-run-a-remote-risk-storming-workshop-with-testsphere?s_id=18001539)

[Prestwell, H. (2020). Community Stories: Who Is Your Customer? A RiskStorming Story](https://www.ministryoftesting.com/articles/community-stories-who-is-your-customer-a-riskstorming-story?s_id=18211552)

[Sisic, M. (2021). Common Misconceptions About Exploratory Testing](https://www.ministryoftesting.com/articles/common-misconceptions-about-exploratory-testing?s_id=18231305)

[Ministry of Testing. Introduction to Risk Storming](https://www.ministryoftesting.com/testsphere/riskstorming)

[The Official Risk Storming Online Web App](https://riskstormingonline.com/)
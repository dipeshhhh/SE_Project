-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 04:11 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `monkeylearn`
--

-- --------------------------------------------------------

--
-- Table structure for table `categories`
--

CREATE TABLE `categories` (
  `cid` int(11) NOT NULL,
  `category` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `categories`
--

INSERT INTO `categories` (`cid`, `category`) VALUES
(1, 'coding'),
(1, 'computer science'),
(2, 'back end'),
(2, 'coding'),
(2, 'computer science'),
(2, 'web development'),
(4, 'horticulture'),
(5, 'coding'),
(5, 'computer science'),
(5, 'front end'),
(5, 'web development'),
(6, 'coding'),
(6, 'computer science'),
(6, 'front end'),
(6, 'web development'),
(7, 'back end'),
(7, 'coding'),
(7, 'computer science'),
(7, 'front end'),
(7, 'web development'),
(8, 'art');

-- --------------------------------------------------------

--
-- Table structure for table `courses`
--

CREATE TABLE `courses` (
  `cid` int(11) NOT NULL,
  `ctitle` varchar(50) NOT NULL,
  `cdesc_short` mediumtext NOT NULL,
  `clink` varchar(500) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `courses`
--

INSERT INTO `courses` (`cid`, `ctitle`, `cdesc_short`, `clink`) VALUES
(1, 'Artificial Intelligence', 'Learn key AI concepts & techniques like ML, NLP, computer vision & robotics. Gain practical skills to design & implement AI algorithms for real-world applications. Perfect for those interested in AI careers.', '../res/courses/artificial_intelligence/'),
(2, 'Database Management System', 'Learn DBMS concepts like relational database design, SQL, indexing, transactions, and data warehousing. Gain hands-on skills to manage complex database systems for data analysis, engineering, or administration careers.', '../res/courses/dbms/'),
(4, 'Gardening For Everyone', 'Learn the fundamental techniques of gardening in our course. Develop practical skills in planting, pruning, and soil management. Perfect for beginners with no prior experience.', '../res/courses/gardening_for_everyone/'),
(5, 'HTML For Beginners', 'Our HTML course covers fundamental concepts and techniques for building websites. Learn HTML tags, elements, and attributes to create static web pages. Perfect for beginners. Start your journey toward web development today.', '../res/courses/html_for_beginners/'),
(6, 'Introduction to CSS', 'Our CSS course teaches fundamental concepts and techniques for styling web pages. Learn how to use CSS selectors, properties, and values to customize the look and feel of your website. Perfect for beginners. Start your journey towards web development today.', '../res/courses/introduction_to_css/'),
(7, 'Javascript For Web Designers', 'Our Javascript course covers fundamental concepts and techniques for adding interactivity to web pages. Learn how to use Javascript to manipulate HTML and CSS, handle user events, and fetch data from APIs. Perfect for web designers. Start your journey towards interactive web design today.', '../res/courses/javascript_for_web_designers/'),
(8, 'Pottery 101', 'Our Pottery 101 course teaches fundamental techniques for hand-building and throwing clay. Learn how to make pinch pots, coil pots, and wheel-thrown vessels. Perfect for beginners with no prior experience. Start your journey towards pottery today.', '../res/courses/pottery_101/');

-- --------------------------------------------------------

--
-- Table structure for table `enrolled_courses`
--

CREATE TABLE `enrolled_courses` (
  `cid` int(11) NOT NULL,
  `uid` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `uid` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(255) NOT NULL,
  `fname` varchar(100) NOT NULL,
  `lname` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `videos`
--

CREATE TABLE `videos` (
  `vid_no` int(11) NOT NULL,
  `cid` int(11) NOT NULL,
  `vtitle` varchar(255) NOT NULL,
  `vdesc` text NOT NULL,
  `vlink` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `videos`
--

INSERT INTO `videos` (`vid_no`, `cid`, `vtitle`, `vdesc`, `vlink`) VALUES
(1, 1, 'Introduction to AI', 'Definition of AI: Artificial Intelligence refers to the simulation of human intelligence in machines that are programmed to perform tasks that typically require human-like intelligence, such as visual perception, speech recognition, decision-making, and language translation.\r\n\r\nHistory of AI: AI has its roots in computer science and mathematical logic, and has evolved over the years to include machine learning, deep learning, natural language processing, and other advanced technologies.\r\n\r\nApplications of AI: AI has numerous applications in a wide range of fields, including healthcare, finance, transportation, manufacturing, and more.', '../res/courses/default/videos/chapter_1.mp4'),
(1, 2, 'Introduction to DBMS', 'What is DBMS: Definition, components, and importance of DBMS in modern computing.\r\n\r\nTypes of data: Overview of data types including text, numbers, images, and multimedia.\r\n\r\nData models: Overview of data models including hierarchical, network, relational, and object-oriented models.', '../res/courses/default/videos/chapter_1.mp4'),
(1, 4, 'Introduction to Gardening', 'Definition of gardening: Gardening is the art and science of growing and cultivating plants for personal or commercial use.\r\n\r\nBenefits of gardening: Gardening provides numerous benefits such as physical exercise, stress relief, improved air quality, and access to fresh produce.\r\n\r\nTypes of gardening: There are many types of gardening, including vegetable gardening, fruit gardening, ornamental gardening, and container gardening.', '../res/courses/default/videos/chapter_1.mp4'),
(1, 5, 'Introduction to HTML', 'What is HTML: HTML stands for Hypertext Markup Language and is the standard markup language used to create web pages.\r\n\r\nHTML syntax: HTML is made up of tags and attributes, which are used to structure content and define its meaning.\r\nBasic structure of an HTML document: An \r\n\r\nHTML document consists of a <!DOCTYPE> declaration, <html>, <head>, and <body> tags.\r\n\r\nCreating your first HTML document: In this lecture, we\'ll go through the process of creating a simple HTML document, including adding content and saving the file.', '../res/courses/default/videos/chapter_1.mp4'),
(1, 6, 'Introduction to CSS', 'What is CSS: CSS stands for Cascading Style Sheets and is used to style and format web content.\r\n\r\nCSS syntax and selectors: CSS uses selectors to target specific elements on a web page and apply styles to them.\r\n\r\nAdding CSS styles to an HTML document: CSS can be added to an HTML document using the <style> tag or an external CSS file.\r\n\r\nBasic CSS properties: color, font-size, background, etc.: CSS includes a wide range of properties for formatting text, colors, backgrounds, and other visual elements.', '../res/courses/default/videos/chapter_1.mp4'),
(1, 7, 'Introduction to JavaScript', 'What is JavaScript: JavaScript is a programming language used to create dynamic and interactive web content.\r\n\r\nHistory of JavaScript: JavaScript was created by Brendan Eich in 1995 and was originally called Mocha, then changed to LiveScript, and finally to JavaScript.\r\n\r\nUses of JavaScript: JavaScript can be used for a wide range of purposes, including creating interactive web pages, building web applications, and developing mobile apps.\r\n\r\nBasic JavaScript syntax: JavaScript syntax includes variables, operators, functions, control structures, and objects.', '../res/courses/default/videos/chapter_1.mp4'),
(1, 8, 'Introduction to Pottery', 'Definition of pottery: Pottery is the art of creating objects from clay by shaping and firing them in a kiln.\r\n\r\nTypes of pottery: There are many types of pottery, including functional pottery such as bowls, plates, and vases, as well as decorative pottery such as sculptures and figurines.\r\n\r\nHistorical significance of pottery: Pottery has been an important part of human history for thousands of years, with many ancient civilizations leaving behind beautiful and intricate pottery pieces.', '../res/courses/default/videos/chapter_1.mp4'),
(2, 1, 'Machine Learning', 'Definition of machine learning: Machine learning refers to the use of algorithms that enable machines to learn from data and improve their performance over time.\r\nTypes of machine learning: There are three main types of machine learning: supervised learning, unsupervised learning, and reinforcement learning.\r\n\r\nApplications of machine learning: Machine learning is used in a variety of applications, such as image recognition, speech recognition, fraud detection, and predictive analytics.', '../res/courses/default/videos/chapter_2.mp4'),
(2, 2, 'Relational Data Model', 'Relational data model: Detailed overview of the relational data model, including entities, attributes, keys, and relationships.\r\n\r\nNormalization: Overview of normalization, a process of organizing data in a relational database to minimize redundancy and improve data integrity.', '../res/courses/default/videos/chapter_2.mp4'),
(2, 4, 'Understanding Soil', 'Importance of soil: Soil is the foundation of any garden and has a direct impact on the health and growth of plants.\r\n\r\nTypes of soil: There are many types of soil, including sandy, loamy, clay, and organic soil.\r\n\r\nSoil testing: Soil testing is important to determine the pH level, nutrient content, and overall health of soil.\r\n\r\nImproving soil health: Soil health can be improved by adding compost, fertilizer, and other organic matter to the soil.', '../res/courses/default/videos/chapter_2.mp4'),
(2, 5, 'HTML Tags', 'What are HTML tags: HTML tags are used to structure content and provide meaning to web pages.\r\n\r\nCommonly used HTML tags: Some of the most commonly used HTML tags include <h1> - <h6> for headings, <p> for paragraphs, <ul> and <ol> for lists, and <a> for links.\r\n\r\nTag attributes and values: HTML tags can have attributes and values that provide additional information about the content.\r\n\r\nUsing tags to structure content: In this lecture, we\'ll look at how HTML tags can be used to structure content in a logical and meaningful way.', '../res/courses/default/videos/chapter_2.mp4'),
(2, 6, 'CSS Layout Basics', 'Box model: The CSS box model describes how elements are structured and can be customized using properties such as margin, border, and padding.\r\n\r\nDisplay property: The display property controls how elements are displayed on a web page, such as block or inline.\r\n\r\nFloat property: The float property is used to position elements next to each other on a web page.\r\n\r\nPosition property: The position property allows you to position elements on a web page using different techniques, such as relative and absolute positioning.', '../res/courses/default/videos/chapter_2.mp4'),
(2, 7, 'JavaScript Basics', 'Variables and data types: Variables are used to store data in JavaScript and can be assigned different data types such as strings, numbers, booleans, etc.\r\n\r\nOperators: Operators are used to perform operations on variables and values, such as arithmetic, comparison, and logical operations.\r\n\r\nFunctions: Functions are used to group code and perform specific tasks. They can be defined and called multiple times throughout a program.\r\n\r\nControl structures: Control structures such as if/else statements and loops are used to control the flow of a program.', '../res/courses/default/videos/chapter_2.mp4'),
(2, 8, 'Types of Clay', 'Types of clay: There are many types of clay, including earthenware, stoneware, and porcelain.\r\n\r\nCharacteristics of clay: The characteristics of clay such as plasticity, workability, and shrinkage can have an impact on the pottery-making process.\r\n\r\nClay preparation: Clay must be prepared before it can be used for pottery-making, including wedging and adding water to achieve the desired consistency.', '../res/courses/default/videos/chapter_2.mp4'),
(3, 1, 'Deep Learning', 'Definition of deep learning: Deep learning is a type of machine learning that involves the use of neural networks with multiple layers, enabling machines to learn and make decisions on their own.\r\n\r\nArchitecture of deep learning: Deep learning networks can be composed of many layers, with each layer processing data and passing it on to the next layer until the final output is produced.\r\n\r\nApplications of deep learning: Deep learning is used in a variety of applications, such as self-driving cars, facial recognition, natural language processing, and more.', '../res/courses/default/videos/chapter_3.mp4'),
(3, 2, 'SQL', 'SQL: Overview of Structured Query Language (SQL), a programming language used to manage and manipulate data in relational databases.\r\n\r\nData Definition Language (DDL): Overview of DDL commands, which are used to create, alter, and delete database objects such as tables and indexes.\r\n\r\nData Manipulation Language (DML): Overview of DML commands, which are used to insert, update, and delete data in a database.', '../res/courses/default/videos/chapter_3.mp4'),
(3, 4, 'Plant Selection', 'Choosing plants: It\'s important to choose plants that are appropriate for the specific growing conditions of the garden, such as the amount of sunlight, soil type, and climate.\r\n\r\nAnnual vs. perennial plants: Annual plants must be replanted each year, while perennial plants can live for multiple years.\r\n\r\nNative vs. non-native plants: Native plants are well adapted to the local environment and require less maintenance than non-native plants.\r\n\r\nPlant propagation: Plants can be propagated through seeds, cuttings, or division.', '../res/courses/default/videos/chapter_3.mp4'),
(3, 5, 'Text Formatting in HTML', 'Headings and paragraphs: Headings and paragraphs are used to organize content and provide structure to web pages.\r\n\r\nBold, italic, and underline text: HTML tags can be used to format text in a variety of ways, including making it bold, italic, or underlined.\r\n\r\nUsing lists to organize content: Lists can be used to organize content into ordered or unordered lists, such as bullet points or numbered items.\r\n\r\nAdding links to HTML documents: HTML allows you to create links to other web pages, images, and other resources on the internet.', '../res/courses/default/videos/chapter_3.mp4'),
(3, 6, 'Advanced CSS Layout Techniques', 'CSS Grid: CSS Grid is a powerful layout system that allows you to create complex grid layouts with ease.\r\n\r\nFlexbox: Flexbox is a layout mode that provides a flexible and responsive way to arrange elements on a web page.\r\n\r\nResponsive design with media queries: \r\nMedia queries allow you to create responsive designs that adapt to different screen sizes and devices.\r\n\r\nLayout frameworks: Bootstrap, Foundation, etc.: CSS frameworks like Bootstrap and Foundation provide pre-designed layouts and components that can be used to create web pages quickly and easily.', '../res/courses/default/videos/chapter_3.mp4'),
(3, 7, 'Advanced JavaScript Concepts', 'Objects: Objects are used to store data and behaviors together in JavaScript. They can be used to create custom data types and are used heavily in object-oriented programming.\r\n\r\nArrays: Arrays are used to store lists of data in JavaScript and can be manipulated using methods such as push, pop, shift, and unshift.\r\n\r\nClasses: Classes are used in object-oriented programming to define custom data types and behaviors.\r\n\r\nAsynchronous programming: Asynchronous programming is used in JavaScript to handle tasks that take a long time to complete, such as network requests and user input.', '../res/courses/default/videos/chapter_3.mp4'),
(3, 8, 'Pottery Tools and Equipment', 'Pottery tools: Pottery tools include a variety of instruments such as throwing wheels, trimming tools, and carving tools.\r\n\r\nKilns: Kilns are used to fire pottery at high temperatures, allowing the clay to harden and become durable.\r\n\r\nGlazes: Glazes are coatings that are applied to pottery to create a smooth and glossy surface, as well as add color and texture.\r\n\r\nSafety precautions: Safety precautions such as wearing protective clothing and using tools properly are important for avoiding injury during pottery-making.', '../res/courses/default/videos/chapter_3.mp4'),
(4, 1, 'Natural Language Processing (NLP)', 'Definition of NLP: Natural Language Processing refers to the ability of machines to understand and interpret human language.\r\n\r\nTechniques used in NLP: NLP uses a variety of techniques, such as sentiment analysis, machine translation, and named entity recognition.\r\n\r\nApplications of NLP: NLP is used in a variety of applications, such as chatbots, virtual assistants, and content analysis.', '../res/courses/default/videos/chapter_4.mp4'),
(4, 2, 'Advanced SQL', 'Advanced SQL: Overview of advanced SQL concepts including subqueries, joins, views, and stored procedures.\r\n\r\nData control language (DCL): Overview of DCL commands, which are used to grant or revoke permissions to access database objects.', '../res/courses/default/videos/chapter_4.mp4'),
(4, 4, 'Garden Design', 'Principles of garden design: Garden design involves using principles such as balance, symmetry, focal points, and color to create an aesthetically pleasing and functional garden.\r\n\r\nGarden styles: There are many garden styles, including formal, informal, cottage, and Japanese gardens.\r\n\r\nGarden elements: Garden elements such as paths, borders, water features, and garden structures can enhance the design of a garden.', '../res/courses/default/videos/chapter_4.mp4'),
(4, 5, 'Images in HTML', 'Adding images to an HTML document: Images can be added to web pages using the <img> tag.\r\n\r\nImage formats and file sizes: Different image formats have different advantages and disadvantages, and file size can affect the load time of web pages.\r\n\r\nUsing alt text and titles for images: Alt text and titles provide additional information about images for users who are visually impaired or cannot load images.\r\n\r\nFormatting and aligning images: CSS can be used to format and align images within web pages.', '../res/courses/default/videos/chapter_4.mp4'),
(4, 6, 'Typography in CSS', 'Font properties: CSS includes a wide range of font properties for formatting text, such as font-family, font-size, and font-weight.\r\n\r\nText properties: CSS also includes text properties for controlling text alignment, decoration, and transformation.\r\n\r\nWeb fonts: Web fonts allow you to use custom fonts on a web page by embedding them in the CSS or linking to them from an external source.\r\n\r\nGoogle Fonts: Google Fonts is a free service that provides a wide range of high-quality web fonts that can be easily added to a web page.', '../res/courses/default/videos/chapter_4.mp4'),
(4, 7, 'JavaScript in the Browser', 'DOM manipulation: The Document Object Model (DOM) is used in JavaScript to interact with the HTML elements of a web page, allowing for dynamic and interactive content.\r\n\r\nEvent handling: JavaScript can be used to handle events such as mouse clicks, key presses, and form submissions, allowing for user interaction with a web page.\r\n\r\nForm validation: JavaScript can be used to validate form input and prevent invalid data from being submitted to a server.\r\n\r\nCookies and local storage: JavaScript can be used to store data on a user\'s computer using cookies and local storage.', '../res/courses/default/videos/chapter_4.mp4'),
(4, 8, 'Pottery Techniques - Handbuilding', 'Handbuilding techniques: Handbuilding techniques involve creating pottery by shaping clay with your hands or with tools.\r\n\r\nPinch pots: Pinch pots are created by forming a ball of clay and pinching and shaping it into the desired shape.\r\n\r\nCoiling: Coiling involves creating pottery by stacking and attaching coils of clay on top of each other to create the desired form.\r\n\r\nSlab-building: Slab-building involves creating pottery by rolling out sheets of clay and cutting and assembling them into the desired shape.', '../res/courses/default/videos/chapter_4.mp4'),
(5, 1, 'Computer Vision', 'Definition of computer vision: Computer vision refers to the ability of machines to interpret and analyze visual data, such as images and videos.\r\n\r\nTechniques used in computer vision: Computer vision uses a variety of techniques, such as image recognition, object detection, and image segmentation.\r\n\r\nApplications of computer vision: Computer vision is used in a variety of applications, such as autonomous vehicles, medical imaging, and surveillance.', '../res/courses/default/videos/chapter_5.mp4'),
(5, 2, 'Database Design', 'Database design: Overview of the process of designing a database, including identifying requirements, creating an ERD (Entity-Relationship Diagram), and converting the ERD into a relational schema.\r\n\r\nIndexes: Overview of indexes, which are used to improve the performance of database queries.', '../res/courses/default/videos/chapter_5.mp4'),
(5, 4, 'Planting Techniques', 'Planting basics: Planting techniques include digging holes, planting seeds or seedlings, and watering plants.\r\n\r\nSpacing and depth: Proper spacing and depth are important for the health and growth of plants.\r\n\r\nTransplanting: Transplanting involves moving a plant from one location to another, and is often done when plants outgrow their original location.', '../res/courses/default/videos/chapter_5.mp4'),
(5, 5, 'Tables in HTML', 'Creating tables with HTML: Tables can be used to display data in a structured format.\r\n\r\nTable headers and data cells: Tables consist of headers and data cells, which can be formatted using HTML and CSS.\r\n\r\nMerging cells and adding borders: Tables can be customized by merging cells and adding borders using HTML and CSS.\r\n\r\nFormatting tables with CSS: CSS can be used to style tables, including changing colors, font sizes, and alignment.', '../res/courses/default/videos/chapter_5.mp4'),
(5, 6, 'CSS Colors and Backgrounds', 'Color properties: CSS provides a variety of color properties for controlling text, backgrounds, and other visual elements.\r\n\r\nColor values: CSS supports a range of color values, including named colors, hexadecimal values, and RGB values.\r\n\r\nBackground properties: CSS allows you to control the background of an element using properties such as background-color and background-image.\r\n\r\nGradient backgrounds: CSS also supports gradient backgrounds, which allow you to create complex color patterns and effects.', '../res/courses/default/videos/chapter_5.mp4'),
(5, 7, 'JavaScript Libraries and Frameworks', 'What are JavaScript libraries and frameworks: JavaScript libraries and frameworks are pre-written collections of code that provide functionality for specific tasks, such as user interface design, data manipulation, and animation.\r\n\r\nExamples of JavaScript libraries and frameworks: jQuery, React, Vue.js, Angular, etc.\r\n\r\nBenefits of using JavaScript libraries and frameworks: JavaScript libraries and frameworks save time and effort by providing pre-written code and standardization for certain tasks.\r\n\r\nDownsides of using JavaScript libraries and frameworks: JavaScript libraries and frameworks can be heavy and slow down the loading time of web pages. Also, they may limit creativity and customization options.', '../res/courses/default/videos/chapter_5.mp4'),
(5, 8, 'Pottery Techniques - Throwing', 'Throwing: Throwing is a technique used to create pottery on a potter\'s wheel, and involves using the spinning motion of the wheel to shape the clay.\r\n\r\nCentering: Centering involves using the potter\'s wheel to spin the clay and bring it into a symmetrical shape.\r\n\r\nPulling: Pulling involves using your fingers and hands to shape the clay into the desired form.\r\n\r\nTrimming: Trimming involves using a trimming tool to remove excess clay and refine the shape of the pottery.', '../res/courses/default/videos/chapter_5.mp4'),
(6, 1, 'Robotics', 'Definition of robotics: Robotics refers to the design, construction, and operation of robots that can perform tasks autonomously.\r\n\r\nTypes of robots: There are various types of robots, such as industrial robots, service robots, and humanoid robots.\r\n\r\nApplications of robotics: Robotics is used in a variety of applications, such as manufacturing, healthcare, and space exploration.', '../res/courses/default/videos/chapter_6.mp4'),
(6, 2, 'Transaction Management', 'Transactions: Overview of transactions, a sequence of operations that are executed as a single unit of work.\r\n\r\nACID properties: Explanation of the ACID properties (Atomicity, Consistency, Isolation, Durability), which ensure the reliability of database transactions.', '../res/courses/default/videos/chapter_6.mp4'),
(6, 4, 'Garden Maintenance', 'Watering: Proper watering is important for the health and growth of plants, and varies depending on the type of plant and growing conditions.\r\n\r\nPruning: Pruning involves removing dead or damaged branches or leaves from plants, and can help improve their health and appearance.\r\n\r\nWeeding: Weeds compete with plants for water and nutrients, and should be removed regularly.\r\n\r\nPest and disease control: Pest and disease control involves identifying and treating pests and diseases that can damage plants.', '../res/courses/default/videos/chapter_6.mp4'),
(6, 5, 'Forms in HTML', 'Creating forms with HTML: Forms are used to collect information from users and can include text fields, checkboxes, radio buttons, and other input types.\r\n\r\nInput types: text, password, email, etc.: HTML supports a variety of input types, each with its own set of attributes and formatting options.\r\n\r\nLabels and placeholders: Labels and placeholders provide additional information and guidance to users filling out forms.\r\n\r\nForm validation with HTML5: HTML5 includes new features for form validation, such as required fields and pattern matching.', '../res/courses/default/videos/chapter_6.mp4'),
(6, 6, 'CSS Transitions and Animations', 'Transition properties: CSS transitions allow you to add smooth animations to web content when a property changes, such as when hovering over a button.\r\n\r\nAnimation properties: CSS animations allow you to create more complex animations that can be triggered by user interaction or automatically.\r\n\r\nKeyframes: Keyframes are used to define the stages of an animation and can be used to create more complex and customized animations.\r\n\r\nAnimation libraries: CSS animation libraries like Animate.css provide pre-built animations that can be easily added to a web page.', '../res/courses/default/videos/chapter_6.mp4'),
(6, 7, 'Debugging JavaScript', 'Common JavaScript errors: Common errors in JavaScript include syntax errors, type errors, and logic errors.\r\n\r\nDebugging tools: JavaScript debugging can be done using tools such as console.log, breakpoints, and browser developer tools.\r\n\r\nBest practices for debugging: Best \r\npractices for debugging include testing code in small chunks, using descriptive variable names, and commenting code.', '../res/courses/default/videos/chapter_6.mp4'),
(6, 8, 'Pottery Decoration', 'Decoration techniques: Pottery can be decorated in many ways, including carving, painting, and applying textures.\r\n\r\nSlip: Slip is a liquid clay that can be applied to pottery to add texture or act as a glue for attaching pieces together.\r\n\r\nStenciling: Stenciling involves using a template to create a design on pottery by applying slip or glaze through the stencil.\r\n\r\nSgraffito: Sgraffito involves scratching a design into the surface of pottery, often revealing a different colored layer of clay underneath.', '../res/courses/default/videos/chapter_6.mp4'),
(7, 1, 'Ethics in AI', 'Importance of ethics in AI: As AI becomes more prevalent, it is important to consider the ethical implications of its use and development.\r\n\r\nEthical considerations in AI: Ethical considerations in AI include issues such as bias, privacy, transparency, and accountability.\r\n\r\nResponsible AI: The concept of responsible AI involves designing and developing AI systems in a way that prioritizes ethical considerations and takes into account the potential impact on society.', '../res/courses/default/videos/chapter_7.mp4'),
(7, 2, 'Database Administration', 'Database administration: Overview of database administration tasks, including database backup and recovery, database security, and performance tuning.\r\n\r\nBackup and recovery: Explanation of database backup and recovery procedures, including full, incremental, and differential backups.', '../res/courses/default/videos/chapter_7.mp4'),
(7, 4, 'Composting', 'What is composting: Composting is the process of breaking down organic matter into a nutrient-rich soil amendment.\r\n\r\nBenefits of composting: Composting reduces waste, improves soil health, and reduces the need for chemical fertilizers.\r\n\r\nComposting materials: Composting materials include food scraps, yard waste, and other organic matter.\r\n\r\nComposting methods: Composting methods include hot composting, cold composting, and vermicomposting.', '../res/courses/default/videos/chapter_7.mp4'),
(7, 5, 'Audio and Video in HTML', 'Adding audio and video to an HTML document: Audio and video can be added to web pages using HTML tags.\r\n\r\nSupported file formats and codecs: Different web browsers support different audio and video formats, so it\'s important to choose the right format for your needs.\r\n\r\nControlling playback with HTML attributes: HTML provides attributes for controlling playback, such as autoplay, loop, and controls.\r\n\r\nAdding captions and subtitles: Captions and subtitles can be added to audio and video content using HTML and other web technologies.', '../res/courses/default/videos/chapter_7.mp4'),
(7, 6, 'CSS Flexibility and Responsiveness', 'Responsive design: Responsive design is the practice of creating web pages that adapt to different screen sizes and devices.\r\n\r\nMedia queries: Media queries allow you to create responsive designs that adapt to different screen sizes and devices.\r\n\r\nFluid layouts: Fluid layouts use percentages and ems instead of fixed pixel values to create flexible and responsive designs.\r\n\r\nMobile-first design', '../res/courses/default/videos/chapter_7.mp4'),
(7, 7, 'JavaScript APIs', 'What are JavaScript APIs: JavaScript APIs are collections of pre-written code that allow developers to access certain functionalities and data from external sources.\r\n\r\nExamples of JavaScript APIs: Google Maps API, Twitter API, Facebook API, etc.\r\n\r\nBenefits of using JavaScript APIs: JavaScript APIs save time and effort by providing pre-written code.\r\n\r\nHow to use JavaScript APIs: JavaScript APIs are accessed through a series of requests and responses, usually in the form of HTTP requests.\r\n\r\nAuthentication and security: Many JavaScript APIs require authentication and security measures to prevent unauthorized access to data.', '../res/courses/default/videos/chapter_7.mp4'),
(7, 8, 'Firing Pottery', 'Firing pottery: Firing pottery involves heating it to a high temperature in a kiln, allowing the clay to harden and become durable.\r\n\r\nBisque firing: Bisque firing is the first firing of pottery, which hardens the clay and prepares it for glazing.\r\n\r\nGlaze firing: Glaze firing is the second firing of pottery, which melts and fuses the glaze onto the surface of the pottery.', '../res/courses/default/videos/chapter_7.mp4'),
(8, 1, 'AI in Business', 'Applications of AI in business: AI is being used in a variety of ways in business, such as customer service, fraud detection, and marketing.\r\n\r\nBenefits of AI in business: AI can help businesses improve efficiency, reduce costs, and gain insights into customer behavior.\r\n\r\nChallenges of AI in business: Challenges of AI in business include data privacy concerns, ethical considerations, and the need for skilled professionals to develop and maintain AI systems.', '../res/courses/default/videos/chapter_8.mp4'),
(8, 2, 'Distributed Databases', 'Distributed databases: Overview of distributed databases, which are databases that are spread across multiple computers.\r\n\r\nReplication and fragmentation: Explanation of database replication and fragmentation, techniques used to distribute data across multiple servers.', '../res/courses/default/videos/chapter_8.mp4'),
(8, 4, 'Harvesting and Preserving', 'Harvesting: Harvesting involves picking fruits, vegetables, and herbs when they are ripe and ready to be eaten.\r\n\r\nPreserving: Preserving involves storing or processing harvested plants to extend their shelf life, such as canning, freezing, or drying.\r\n\r\nSeed saving: Seed saving involves collecting and storing seeds from plants for use in future', '../res/courses/default/videos/chapter_8.mp4'),
(8, 5, 'Semantic HTML', 'What is semantic HTML: Semantic HTML is the practice of using HTML tags that provide meaning to web content, rather than just formatting.\r\n\r\nBenefits of using semantic HTML: Using semantic HTML can improve accessibility, search engine optimization, and the overall structure and organization of web content.\r\n\r\nSemantic tags: header, footer, nav, article, etc.: HTML5 introduced new semantic tags for organizing content, such as <header>, <footer>, <nav>, and <article>.\r\n\r\nImproving accessibility with semantic HTML: Semantic HTML can help make web content more accessible to users with disabilities, such as screen readers and other assistive technologies.', '../res/courses/default/videos/chapter_8.mp4'),
(8, 6, 'CSS Frameworks', 'What are CSS frameworks: CSS frameworks are pre-designed collections of CSS files that provide a structure and set of rules for formatting web pages.\r\n\r\nExamples of CSS frameworks: Bootstrap, Foundation, Materialize, Bulma, etc.\r\n\r\nBenefits of using CSS frameworks: CSS frameworks save time and effort by providing pre-designed components, responsive layouts, and cross-browser compatibility.\r\n\r\nDownsides of using CSS frameworks: CSS frameworks can be heavy and slow down the loading time of web pages. Also, they may limit creativity and customization options.', '../res/courses/default/videos/chapter_8.mp4'),
(8, 7, 'Server-side JavaScript', 'What is server-side JavaScript: Server-side JavaScript is a form of JavaScript that runs on the server side instead of the client side.\r\n\r\nNode.js: Node.js is a popular server-side JavaScript runtime environment that allows developers to write JavaScript code on the server side.\r\n\r\nAdvantages of server-side JavaScript: Server-side JavaScript allows for faster server-side processing, better scalability, and easier code reuse.\r\n\r\nDisadvantages of server-side JavaScript: Server-side JavaScript can be more complex than traditional server-side languages, and may require more powerful server hardware.', '../res/courses/default/videos/chapter_8.mp4'),
(8, 8, 'Troubleshooting Pottery', 'Common pottery problems: Common pottery problems include cracking, warping, and uneven firing.\r\n\r\nCauses of problems: Problems can be caused by issues with the clay, the firing process, or the pottery-making techniques.\r\n\r\nPreventing problems: Preventing problems can involve careful preparation of the clay, proper firing techniques, and avoiding common mistakes such as overworking the clay or not properly supporting the pottery during firing.', '../res/courses/default/videos/chapter_8.mp4'),
(9, 1, 'AI and Society', 'Impact of AI on society: AI has the potential to transform society in numerous ways, such as changing the nature of work, improving healthcare, and revolutionizing transportation.\r\n\r\nSocial and ethical considerations: There are social and ethical considerations to be addressed as AI becomes more prevalent, such as job displacement and algorithmic bias.\r\n\r\nResponsible AI: The concept of responsible AI involves designing and developing AI systems in a way that takes into account the potential impact on society and prioritizes ethical considerations.', '../res/courses/default/videos/chapter_9.mp4'),
(9, 2, 'Big Data and NoSQL', 'Big Data: Explanation of big data and its impact on database management.\r\n\r\nNoSQL databases: Overview of NoSQL databases, which are non-relational databases used for big data and real-time applications.', '../res/courses/default/videos/chapter_9.mp4'),
(9, 4, 'Garden Sustainability', 'Sustainable gardening: Sustainable gardening involves practices that minimize negative impacts on the environment, such as using organic gardening methods and conserving water.\r\n\r\nComposting and recycling: Composting and recycling garden waste can reduce the amount of waste that goes to landfills.\r\n\r\nWater conservation: Water conservation techniques such as using rain barrels or drip irrigation can reduce water usage.\r\n\r\nIntegrated pest management: Integrated pest management involves using a combination of techniques, such as natural predators and resistant plant varieties, to control pests instead of relying solely on pesticides.', '../res/courses/default/videos/chapter_9.mp4'),
(9, 6, 'CSS Preprocessors', 'What are CSS preprocessors: CSS preprocessors are programs that extend the functionality of CSS by adding features such as variables, functions, and nesting.\r\n\r\nExamples of CSS preprocessors: Sass, Less, Stylus, etc.\r\n\r\nBenefits of using CSS preprocessors: CSS preprocessors increase productivity and make code more maintainable by allowing developers to write cleaner, more organized code.\r\n\r\nDownsides of using CSS preprocessors: CSS preprocessors require an extra step of compiling the code into regular CSS, which can add complexity to the development process.', '../res/courses/default/videos/chapter_9.mp4'),
(9, 7, 'JavaScript Testing', 'Importance of testing: Testing is important to ensure that JavaScript code is functioning as intended and does not have any errors or bugs.\r\n\r\nTypes of testing: Types of testing include unit testing, integration testing, and end-to-end testing.\r\n\r\nTesting frameworks: JavaScript testing frameworks such as Jest and Mocha provide tools and methods for writing and running tests.\r\n\r\nBest practices for testing: Best practices for testing include writing testable code, creating a comprehensive test suite, and regularly running tests.', '../res/courses/default/videos/chapter_9.mp4'),
(9, 8, 'Pottery History and Culture', 'Pottery throughout history: Pottery has played an important role in many cultures throughout history, including in ancient Greece, China, and Native American communities.\r\n\r\nCultural significance: Pottery has been used for both functional and decorative purposes, and has often been a way to express cultural identity and tradition.\r\n\r\nModern pottery: Modern pottery continues to be influenced by historical techniques and styles, while also incorporating new technologies and materials.', '../res/courses/default/videos/chapter_9.mp4'),
(10, 1, 'Future of AI', 'Future trends in AI: Some of the future trends in AI include the development of more advanced AI systems, the integration of AI with other technologies, and the increasing use of AI in everyday life.\r\n\r\nChallenges and opportunities: The future of AI presents both challenges and opportunities, such as the need for continued research and development and the potential for AI to help address some of the world\'s most pressing problems.\r\n\r\nImportance of AI education: As AI becomes more prevalent, there will be an increasing need for education and training in AI to ensure that individuals have the skills necessary to work with and develop AI systems.', '../res/courses/default/videos/chapter_10.mp4'),
(10, 2, 'Future of DBMS', 'Future of DBMS: Overview of future trends in database management, including cloud-based databases, in-memory databases, and blockchain-based databases.\r\n\r\nChallenges and opportunities: Discussion of the challenges and opportunities facing DBMS in the future, such as scalability, security, and privacy.', '../res/courses/default/videos/chapter_10.mp4'),
(10, 4, 'Advanced Gardening Techniques', 'Hydroponics: Hydroponics is a technique for growing plants without soil, using nutrient-rich water instead.\r\n\r\nVertical gardening: Vertical gardening involves growing plants on walls or other vertical structures, which can be useful for small spaces or decorative purposes.\r\n\r\nGreenhouses: Greenhouses can extend the growing season and protect plants from harsh weather conditions.\r\n\r\nPropagation techniques: Advanced propagation techniques include grafting, air layering, and tissue culture.', '../res/courses/default/videos/chapter_10.mp4'),
(10, 6, 'CSS Best Practices', 'Naming conventions: Naming conventions such as BEM (Block Element Modifier) can help keep CSS code organized and maintainable.\r\n\r\nMinification and optimization: Minifying and optimizing CSS code can improve the loading time of web pages by reducing file size and removing unnecessary code.\r\n\r\nCross-browser compatibility: Testing CSS code in different browsers can ensure that web pages display correctly across all devices and platforms.\r\n\r\nAccessibility: Designing CSS code with accessibility in mind can ensure that web pages are usable by everyone, including those with disabilities.', '../res/courses/default/videos/chapter_10.mp4'),
(10, 7, 'JavaScript Tools and Resources', 'JavaScript tools: There are many tools available for working with JavaScript, including text editors, integrated development environments (IDEs), and package managers such as npm.\r\n\r\nJavaScript resources: There are many resources available for learning and working with JavaScript, including documentation, online courses, forums, and community-driven resources such as GitHub.\r\n\r\nStaying up to date: JavaScript is constantly evolving, so it\'s important to stay up to date with new technologies, updates, and best practices.', '../res/courses/default/videos/chapter_10.mp4'),
(10, 8, 'Advanced Pottery Techniques', 'Advanced throwing techniques: Advanced throwing techniques include altering the shape of the pottery on the wheel, creating multiple forms at once, and incorporating different materials such as glass or metal.\r\n\r\nRaku firing: Raku firing is a specialized firing technique that involves removing the pottery from the kiln at high temperatures and quickly cooling it, resulting in unique and often unpredictable patterns and colors.\r\n\r\nSculpting and figurative pottery: Sculpting and figurative pottery involves creating three-dimensional forms that can be highly detailed and intricate, often requiring advanced skills in clay manipulation and carving.', '../res/courses/default/videos/chapter_10.mp4');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`cid`,`category`);

--
-- Indexes for table `courses`
--
ALTER TABLE `courses`
  ADD PRIMARY KEY (`cid`);

--
-- Indexes for table `enrolled_courses`
--
ALTER TABLE `enrolled_courses`
  ADD PRIMARY KEY (`cid`,`uid`),
  ADD KEY `uid` (`uid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`uid`),
  ADD UNIQUE KEY `USERNAME` (`username`),
  ADD UNIQUE KEY `EMAIL` (`email`);

--
-- Indexes for table `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`vid_no`,`cid`),
  ADD KEY `cid` (`cid`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `courses`
--
ALTER TABLE `courses`
  MODIFY `cid` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `uid` int(11) NOT NULL AUTO_INCREMENT;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `categories`
--
ALTER TABLE `categories`
  ADD CONSTRAINT `categories_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `courses` (`cid`);

--
-- Constraints for table `enrolled_courses`
--
ALTER TABLE `enrolled_courses`
  ADD CONSTRAINT `enrolled_courses_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `courses` (`cid`),
  ADD CONSTRAINT `enrolled_courses_ibfk_2` FOREIGN KEY (`uid`) REFERENCES `users` (`uid`);

--
-- Constraints for table `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`cid`) REFERENCES `courses` (`cid`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;

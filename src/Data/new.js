const data = [
  {
    question:
      "A company’s website traffic grows by 15% every month. If it had 20,000 visitors in January, how many visitors will it have in March?",
    options: ["23,000", "26,450", "28,000", "30,500"],
    answer: "26,450",
  },
  {
    question:
      "A digital marketing agency spends ₹75,000 on ads. If 60% goes to Facebook Ads and the rest to Google Ads, how much was spent on Google Ads?",
    options: ["₹30,000", "₹45,000", "₹50,000", "₹55,000"],
    answer: "₹30,000",
  },
  {
    question:
      "A web page takes 5 seconds to load. After optimization, it loads in 3 seconds. What is the percentage decrease in load time?",
    options: ["25%", "40%", "50%", "60%"],
    answer: "40%",
  },
  {
    question:
      "A cybersecurity analyst detects 80 cyber threats in a week. If the number increases by 25% each week, how many threats will there be in the third week?",
    options: ["125", "140", "150", "160"],
    answer: "150",
  },
  {
    question:
      "A website’s bounce rate is 40%, meaning 40% of visitors leave after viewing one page. If 10,000 users visit, how many leave without interacting?",
    options: ["2,000", "4,000", "6,000", "8,000"],
    answer: "4,000",
  },
  {
    question:
      "A data analyst processes 250,000 records in 5 hours. What is the average number of records processed per minute?",
    options: ["600", "800", "1,000", "1,250"],
    answer: "1,000",
  },
  {
    question:
      "If an e-commerce website converts 5% of visitors into buyers, how many buyers would there be out of 50,000 visitors?",
    options: ["1,000", "2,000", "2,500", "3,000"],
    answer: "2,500",
  },
  {
    question:
      "A UI/UX designer reduces unnecessary clicks in a checkout process, improving the conversion rate from 3% to 4%. If 50,000 users visit, how many additional sales occur?",
    options: ["50", "250", "500", "750"],
    answer: "500",
  },
  {
    question:
      "An AI model has an accuracy of 92%. If it processes 5,000 images, how many are misclassified?",
    options: ["100", "200", "300", "400"],
    answer: "400",
  },
  {
    question:
      "If a cybersecurity team identifies 300 phishing emails and blocks 85% of them, how many phishing emails get through?",
    options: ["35", "45", "50", "60"],
    answer: "45",
  },
  {
    question:
      "Which metric measures how often an ad is clicked compared to how often it is shown?",
    options: ["CPC", "CTR", "CPM", "CPA"],
    answer: "CTR",
  },
  {
    question: "Which of these factors directly influences SEO rankings?",
    options: [
      "High-quality backlinks",
      "Long meta descriptions",
      "Excessive keywords",
      "Hidden text",
    ],
    answer: "High-quality backlinks",
  },
  {
    question: "Which of these is a backend language?",
    options: ["HTML", "CSS", "Python", "Bootstrap"],
    answer: "Python",
  },
  {
    question: "Which HTTP status code means 'Not Found'?",
    options: ["200", "301", "404", "500"],
    answer: "404",
  },
  {
    question: "What does CSS stand for?",
    options: [
      "Creative Style Sheets",
      "Computer Style Sheets",
      "Cascading Style Sheets",
      "Custom Style Syntax",
    ],
    answer: "Cascading Style Sheets",
  },
  {
    question:
      "Which JavaScript framework is used for building single-page applications?",
    options: ["Django", "React.js", "PHP", "Laravel"],
    answer: "React.js",
  },
  {
    question: "Which database language is used for querying structured data?",
    options: ["HTML", "SQL", "Python", "JavaScript"],
    answer: "SQL",
  },
  {
    question:
      "Which tool is widely used for creating UI wireframes and prototypes?",
    options: ["Visual Studio Code", "Figma", "MySQL", "TensorFlow"],
    answer: "Figma",
  },

  {
    question: "What is a common digital marketing funnel stage?",
    options: [
      "Awareness",
      "Checkout",
      "Content Creation",
      "Payment Processing",
    ],
    answer: "Awareness",
  },
  {
    question:
      "Which of these platforms is NOT primarily used for paid marketing?",
    options: ["Google Ads", "Facebook Ads", "Instagram", "Wikipedia"],
    answer: "Wikipedia",
  },
  {
    question:
      "Which file format is best for website images to balance quality and speed?",
    options: ["PNG", "JPG", "GIF", "BMP"],
    answer: "JPG",
  },
  {
    question: "Which of the following is NOT a core principle of UI/UX design?",
    options: ["Accessibility", "Readability", "Aesthetics", "Complexity"],
    answer: "Complexity",
  },
  {
    question:
      "Which of the following is the primary goal of usability testing?",
    options: [
      "To find security vulnerabilities",
      "To measure how easily users can interact with a product",
      "To improve website loading speed",
      "To increase website traffic",
    ],
    answer: "To measure how easily users can interact with a product",
  },
  {
    question: "What is the purpose of A/B testing in UI/UX design?",
    options: [
      "To test cybersecurity vulnerabilities",
      "To compare two design versions to determine which performs better",
      "To analyze website backend performance",
      "To check for coding errors",
    ],
    answer: "To compare two design versions to determine which performs better",
  },
  {
    question:
      "Which color scheme is generally recommended for a better user experience?",
    options: [
      "Low contrast text on a bright background",
      "Dark text on a light background",
      "Flashing animations and colorful text",
      "Randomly placed bright colors",
    ],
    answer: "Dark text on a light background",
  },
  {
    question:
      "Which of the following is an example of two-factor authentication (2FA)?",
    options: [
      "A strong password",
      "A password + OTP on the phone",
      "A CAPTCHA test",
      "A security question",
    ],
    answer: "A password + OTP on the phone",
  },
  {
    question: "What does a firewall do?",
    options: [
      "Protects against DDoS attacks",
      "Monitors and filters incoming and outgoing network traffic",
      "Encrypts stored passwords",
      "Identifies phishing emails",
    ],
    answer: "Monitors and filters incoming and outgoing network traffic",
  },
  {
    question:
      "Which of the following is the most effective way to prevent phishing attacks?",
    options: [
      "Installing an antivirus program",
      "Avoiding suspicious email links and verifying senders",
      "Clearing browser cache regularly",
      "Restarting the computer daily",
    ],
    answer: "Avoiding suspicious email links and verifying senders",
  },
  {
    question:
      "Which type of cyberattack floods a network with excessive traffic to disrupt services?",
    options: [
      "SQL Injection",
      "Man-in-the-Middle Attack",
      "DDoS Attack",
      "Phishing",
    ],
    answer: "DDoS Attack",
  },
  {
    question: "What is the primary purpose of penetration testing?",
    options: [
      "To test website speed",
      "To detect software bugs",
      "To identify security weaknesses before attackers do",
      "To optimize network speed",
    ],
    answer: "To identify security weaknesses before attackers do",
  },
  {
    question: "Which programming language is widely used in Data Analytics?",
    options: ["Java", "Python", "C++", "PHP"],
    answer: "Python",
  },
  {
    question: "What is the role of data visualization in analytics?",
    options: [
      "To store large datasets",
      "To make data insights easier to understand using charts and graphs",
      "To clean data before analysis",
      "To replace machine learning models",
    ],
    answer:
      "To make data insights easier to understand using charts and graphs",
  },
  {
    question:
      "Which of the following is a supervised machine learning algorithm?",
    options: [
      "K-Means Clustering",
      "Decision Trees",
      "DBSCAN",
      "Apriori Algorithm",
    ],
    answer: "Decision Trees",
  },
  {
    question: "What does 'Big Data' refer to?",
    options: [
      "Large files stored on a computer",
      "Massive datasets that require advanced tools for processing",
      "Simple spreadsheets with numerical data",
      "High-resolution images stored online",
    ],
    answer: "Massive datasets that require advanced tools for processing",
  },
  {
    question:
      "Which cloud platform is commonly used for AI and data analytics?",
    options: [
      "Amazon Web Services (AWS)",
      "Canva",
      "WordPress",
      "Adobe Photoshop",
    ],
    answer: "Amazon Web Services (AWS)",
  },
];

[
    {
      question: "A company’s website traffic grows by 15% every month. If it had 20,000 visitors in January, how many visitors will it have in March?",
      options: ["23,000", "26,450", "28,000", "30,500"],
      answer: "26,450",
    },
    {
      question: "A digital marketing agency spends ₹75,000 on ads. If 60% goes to Facebook Ads and the rest to Google Ads, how much was spent on Google Ads?",
      options: ["₹30,000", "₹45,000", "₹50,000", "₹55,000"],
      answer: "₹30,000",
    },
    {
      question: "A web page takes 5 seconds to load. After optimization, it loads in 3 seconds. What is the percentage decrease in load time?",
      options: ["25%", "40%", "50%", "60%"],
      answer: "40%",
    },
    {
      question: "A cybersecurity analyst detects 80 cyber threats in a week. If the number increases by 25% each week, how many threats will there be in the third week?",
      options: ["125", "140", "150", "160"],
      answer: "150",
    },
    {
      question: "A website’s bounce rate is 40%, meaning 40% of visitors leave after viewing one page. If 10,000 users visit, how many leave without interacting?",
      options: ["2,000", "4,000", "6,000", "8,000"],
      answer: "4,000",
    },
    {
      question: "A data analyst processes 250,000 records in 5 hours. What is the average number of records processed per minute?",
      options: ["600", "800", "1,000", "1,250"],
      answer: "1,000",
    },
    {
      question: "If an e-commerce website converts 5% of visitors into buyers, how many buyers would there be out of 50,000 visitors?",
      options: ["1,000", "2,000", "2,500", "3,000"],
      answer: "2,500",
    },
    {
      question: "A UI/UX designer reduces unnecessary clicks in a checkout process, improving the conversion rate from 3% to 4%. If 50,000 users visit, how many additional sales occur?",
      options: ["50", "250", "500", "750"],
      answer: "500",
    },
    {
      question: "An AI model has an accuracy of 92%. If it processes 5,000 images, how many are misclassified?",
      options: ["100", "200", "300", "400"],
      answer: "400",
    },
    {
      question: "If a cybersecurity team identifies 300 phishing emails and blocks 85% of them, how many phishing emails get through?",
      options: ["35", "45", "50", "60"],
      answer: "45",
    },
    {
      question: "Which metric measures how often an ad is clicked compared to how often it is shown?",
      options: ["CPC", "CTR", "CPM", "CPA"],
      answer: "CTR",
    },
    {
      question: "Which of these factors directly influences SEO rankings?",
      options: ["High-quality backlinks", "Long meta descriptions", "Excessive keywords", "Hidden text"],
      answer: "High-quality backlinks",
    },
    {
      question: "Which of these is a backend language?",
      options: ["HTML", "CSS", "Python", "Bootstrap"],
      answer: "Python",
    },
    {
      question: "Which HTTP status code means 'Not Found'?",
      options: ["200", "301", "404", "500"],
      answer: "404",
    },
    {
      question: "What does CSS stand for?",
      options: ["Creative Style Sheets", "Computer Style Sheets", "Cascading Style Sheets", "Custom Style Syntax"],
      answer: "Cascading Style Sheets",
    },
    {
      question: "Which JavaScript framework is used for building single-page applications?",
      options: ["Django", "React.js", "PHP", "Laravel"],
      answer: "React.js",
    },
    {
      question: "Which database language is used for querying structured data?",
      options: ["HTML", "SQL", "Python", "JavaScript"],
      answer: "SQL",
    },
    {
      question: "Which tool is widely used for creating UI wireframes and prototypes?",
      options: ["Visual Studio Code", "Figma", "MySQL", "TensorFlow"],
      answer: "Figma",
    }
];

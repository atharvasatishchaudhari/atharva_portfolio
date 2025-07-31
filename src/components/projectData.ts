
// src/components/projectData.ts

export type Project = {
  title: string;
  duration: string;
  image: string;
  link: string;
  points: string[];
  /** Optional – add only when you want the publication row to appear */
  publication?: string;
};

export const projects: Project[] = [
  {
    title: "Household Furniture Detection for Visually Impaired People",
    duration: "(Aug 2021 – Dec 2021)",
    image: "/furniture-detection.png",
    link: "https://github.com/atharvasatishchaudhari/Project-INDOOR_OBJECT_DETECTION_SIFT_KMEANS_PCA_CLASSIFIERS",
    points: [
      "Converts indoor camera views to spoken cues, letting visually-impaired users know when chairs, sofas and wardrobes are nearby",
      "Curated and pre-processed a labelled image set of household-furniture photos for training and testing",
      "Extracted scale- & rotation-invariant key-points with SIFT, then built Bag-of-Features vectors",
      "Trained four classifiers (SVM, Decision Tree, Random Forest, KNN) on those features",
      "Decision Tree delivered the best performance 77.64 % accuracy with the highest recall/F1",
      "Final system speaks detected object names, guiding users to sit or navigate safely indoors",
      "Technologies used : Python, OpenCV, scikit-learn, NumPy, Matplotlib"
    ],
    publication:
      "Publication: Presented paper at the 5th International Conference on Intelligent Computing (IEEE) (March 22–25, 2023)"
  },

  {
    title: "Skin Cancer Classification and Detection using VGG-19 and DenseNet",
    duration: "(Jan 2023 – May 2023)",
    image: "/skin-cancer-classification.png",
    link: "https://github.com/atharvasatishchaudhari/Project-skin-cancer-detection-and-classification-system-using-deep-learning",
    points: [
      "Detects and classifies skin-cancer lesions from dermatoscopic images, giving clinicians early-warning insights",
      "Used HAM10000 dataset; expanded it with flips, crops and brightness tweaks to curb overfitting",
      "Segmented lesions with BCDU-Net, Dice Coefficient 90.66 %, IoU 83.09 %",
      "VGG-19 achieved 97.29 % accuracy and 97.42 % precision, recall, and F1-score",
      "DenseNet121 trailed behind at ≈ 88–89 % accuracy across metrics",
      "Technologies used : Python, TensorFlow & Keras, OpenCV, NumPy, Matplotlib (Jupyter)"
    ],
    publication:
      "Publication: Presented paper at the International Conference on Computational Intelligence, Network and Security (IEEE)\n(Dec 22–23, 2023)"
  },

  {
    title: "Feature Analysis and Clustering of Award-Winning Movies and TV Shows",
    duration: "(Aug 2024 – Dec 2024)",
    image: "/movies-analysis.png",
    link: "https://github.com/atharvasatishchaudhari/Project-Feature-Analysis-and-Clustering-of-Award-Winning-Movies-and-TV-Shows-",
    points: [
      "Predicts Oscar winners and explores Emmy trends using combined Rotten Tomatoes ratings and official awards data, unified in Tableau Prep to build a master movie dataset",
      "Cleaned data, dropped missing values, and label-encoded award categories; critic score, audience score and category became core features",
      "Tackled severe class imbalance (few winners) by switching from Random Forest to XGBoost, tuning scale_pos_weight and lowering the decision threshold to 0.4 to cut false negatives",
      "Final XGBoost model reached AUC-ROC ≈ 0.77–0.80, outperforming Random Forest and meeting client demand for higher recall",
      "SHAP analysis showed critic score, audience score, genre and release year as the most influential predictors",
      "EDA confirmed dramas and historical fiction dominate Oscar wins; critic scores above 85 % sharply raise winning odds",
      "Genre, year and category-specific visualisations in Tableau reveal Best Picture, Editing and Directing as the most competitive fields",
      "Scatter plots of predicted vs actual winners spotlight borderline cases and guide threshold tuning; box-plots show category-wise probability spread",
      "Added a unique movie ID and transformed scores to 0–100 % for clearer dashboards after client feedback",
      "Emmy-side Power BI dashboards highlight Comedy and hybrid Comedy-Drama as top genres; ABC, HBO, NBC, CBS lead network wins, while Netflix/HBO focus on shorter high-quality seasons",
      "Addressed data-join mismatches, missing episode counts and genre granularity via cleaning, imputation and grouping in Tableau Prep",
      "Technologies used: Python (pandas, XGBoost), Tableau Prep & Tableau Desktop, Power BI."
    ]
    // no publication → no arrow/line will be rendered
  },

  {
    title: "Evaluating Semantic Understanding through Medical Text Classification",
    duration: "(Jan 2025 – May 2025)",
    image: "/medical-text-classification.png",
    link: "https://huggingface.co/spaces/atharvasc27112001/Medical_Text_Classification",
    points: [
      "Curated 16 k MedQuAD Q-A pairs with 1 900 focus labels; dropped labels occurring < 4 times",
      "Standardized text, concatenated question + answer, and verbalized labels for richer supervision",
      "Added a lexical-scrubbing adversary that deletes the true focus word, forcing semantic reasoning",
      "TF-IDF baseline: 88.8 % → 17 % after scrubbing—huge reliance on keywords",
      "SBERT: 91.8 % → 13 % when scrubbed; same lexical weakness",
      "PubMedBERT CLS: 99.6 % → 31.6 %; mean-pool: 99.2 % → 34.3 %, best robustness",
      "Introduced temperature-scaled cosine loss to tighten Q-A and label embeddings, boosting top-1 hits",
      "McNemar tests show verbalized labels significantly outperform raw strings under scrubbing",
      "Errors concentrate on synonym, paraphrase and long-question variants—even for transformers",
      "Technologies Used: Python, PyTorch, Hugging Face (PubMedBERT, SBERT), scikit-learn, NumPy, Matplotlib, Jupyter"
    ]
  },

  {
    title: "University Campus-Wide Lost & Found Service with User Reporting and Admin Notifications",
    duration: "(Jan 2025 – Jun 2025)",
    image: "/lost-found-app.png",
    link: "https://github.com/atharvasatishchaudhari/lost-and-found",
    points: [
      "End-to-end JavaScript stack: React 18 SPA on the front end, Axios for API calls, Node.js 18 AWS Lambda handlers behind API Gateway on the back end",
      "Lambda functions cover sign-up / login, lost & found CRUD, admin notifications, and JWT checks",
      "Auth: bcrypt-hashed passwords in DynamoDB Users; login issues a 1-hour JWT that Axios auto-injects on requests",
      "Images: browser sends Base64; Lambda writes to S3 under lost/ or found/ and returns the object URL",
      "Data: DynamoDB tables LostItems, FoundItems, Users; each record stores owner email, metadata, and S3 URL",
      "Notifications: sign-up subscribes the email to an SNS topic; admin’s “Notify Owner” triggers SNS email blasts to confirmed subscribers",
      "Role-based UI: users see only their own reports; admin sees all items plus Notify Owner and “Mark Solved",
      "Routing: if localStorage lacks a JWT, “Get Started” sends users to login; otherwise straight to lost",
      "Security: least-privilege IAM, JWT expiry, bcrypt salts; CORS wildcard in dev",
      "Technologies used: React, React Router, Axios • Node.js 18 Lambda • API Gateway (HTTP) • DynamoDB • S3 • SNS • JWT (jsonwebtoken) • bcryptjs • Serverless Framework"
    ]
    // no publication
  },

  {
    title: "MediHealth – Smart Appointment & Notification System",
    duration: "(June 2025 – July 2024)",
    image: "/medihealth.png",
    link: "https://github.com/atharvasatishchaudhari/MediHealth---Smart-Appointment-Notification-System",
    points: [
      "MERN stack (MongoDB, Express, React, Node.js)",
      "Vite-powered React SPA with Context API (JWT auth state)",
      "Axios for REST calls; Socket.IO client for live slot updates",
      "Express API with JWT-based, role-based auth and input validation",
      "Mongoose schemas: User, Doctor, Appointment",
      "Emergency-delay logic shifts all future bookings atomically",
      "Socket.IO server emits slotAvailable & appointmentsShifted to relevant rooms",
      "bcrypt password hashing; dotenv for env vars; CORS enabled",
      "ESLint & Prettier configured; seedDoctors.js for initial data",
      "Dockerfile templates and production build scripts included",
      "Technologies used: React (Vite, Context API), Axios, Socket.IO client; Node.js, Express, JWT auth, input validation; MongoDB (Mongoose); Socket.IO server; bcrypt, CORS; dotenv, ESLint, Prettier; Dockerfile & production build scripts"
    ]
    // no publication
  },

  {
    title: "Inference Pipeline with Custom Transformer",
    duration: "June 2025 - July 2025",
    image: "/classification.png",
    link: "https://github.com/atharvasatishchaudhari/Inference-Pipeline-with-Custom-Transformer-",
    points: [
      "Leveraged PubMedBERT with frozen label embeddings in a custom PyTorch module to map free-text medical queries directly to topic labels",
      "Fetched and cleaned the Wikipedia introduction plus the five key sections (“Signs and symptoms,” “Causes,” “Diagnosis,” “Prevention,” “Treatment”) via the MediaWiki API for rich contextual data",
      "Assembled a single prompt by concatenating up to 2 k characters of cleaned extracts with the user’s question, ensuring coherent context for generation",
      "Loaded a fine-tuned causal transformer in FP16, added missing EOS/PAD tokens, and enforced left-side truncation so that long prompts fit correctly during inference",
      "Implemented a continuous CLI REPL that accepts user queries, runs classification → retrieval → generation in sequence, and cleanly handles “exit” or “q” commands",
      "Managed end-to-end inference entirely in PyTorch, including loading model weights, supporting mixed-precision on GPU, and falling back to CPU when CUDA isn’t available",
      "Technologies Used: Python, PyTorch, Hugging Face Transformers, requests (MediaWiki API), mixed-precision inference (FP16), and CLI"
    ]
  }
];

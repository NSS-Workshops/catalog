export const dataEngineering = {
  category: "Data Engineering",
  tracks: ["data"],
  description: "Build robust data pipelines and analytics systems",
  workshops: [
    // Beginner Level - Fundamentals
    {
      title: "Data Cleaning & Normalization Fundamentals",
      duration: "2 days",
      level: "Beginner",
      tracks: ["data"],
      description: "Master the essential skills of data cleaning, validation, and normalization using Python and pandas",
      outcomes: [
        "Identify and handle missing data patterns",
        "Normalize data formats and structures",
        "Validate data quality and integrity",
        "Apply data cleaning best practices"
      ],
      prerequisites: "Basic Python knowledge",
      slug: "data-cleaning-normalization"
    },
    {
      title: "SQL for Data Engineering",
      duration: "3 days",
      level: "Beginner",
      tracks: ["data"],
      description: "Comprehensive SQL training focused on data engineering tasks and database operations",
      outcomes: [
        "Write complex SQL queries for data extraction",
        "Design efficient database schemas",
        "Optimize query performance",
        "Implement data aggregation and transformation"
      ],
      prerequisites: "Basic database concepts",
      slug: "sql-data-engineering"
    },
    {
      title: "Python for Data Processing",
      duration: "3 days",
      level: "Beginner",
      tracks: ["data"],
      description: "Learn Python libraries and techniques essential for data processing and manipulation",
      outcomes: [
        "Master pandas for data manipulation",
        "Use NumPy for numerical operations",
        "Handle various data formats (CSV, JSON, XML)",
        "Implement data validation workflows"
      ],
      prerequisites: "Basic Python programming",
      slug: "python-data-processing"
    },

    // Intermediate Level
    {
      title: "ETL Pipeline Development",
      duration: "4 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Design and implement Extract, Transform, Load (ETL) pipelines using modern tools and frameworks",
      outcomes: [
        "Build scalable ETL pipelines",
        "Implement error handling and monitoring",
        "Use Apache Airflow for workflow orchestration",
        "Handle batch and streaming data processing"
      ],
      prerequisites: "SQL and Python proficiency",
      slug: "etl-pipeline-development"
    },
    {
      title: "Data Warehousing with Cloud Platforms",
      duration: "3 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Build modern data warehouses using cloud platforms like AWS, GCP, or Azure",
      outcomes: [
        "Design dimensional data models",
        "Implement data warehouses on cloud platforms",
        "Optimize storage and query performance",
        "Set up automated data ingestion"
      ],
      prerequisites: "SQL expertise, basic cloud knowledge",
      slug: "cloud-data-warehousing"
    },
    {
      title: "Apache Spark for Big Data Processing",
      duration: "4 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Process large-scale datasets efficiently using Apache Spark and PySpark",
      outcomes: [
        "Build Spark applications for data processing",
        "Optimize Spark jobs for performance",
        "Handle structured and unstructured data",
        "Implement real-time data processing"
      ],
      prerequisites: "Python and SQL proficiency",
      slug: "apache-spark-big-data"
    },
    {
      title: "Data Quality & Testing Frameworks",
      duration: "2 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Implement comprehensive data quality monitoring and testing strategies",
      outcomes: [
        "Design data quality metrics and KPIs",
        "Implement automated data testing",
        "Build data validation frameworks",
        "Monitor data pipeline health"
      ],
      prerequisites: "ETL pipeline experience",
      slug: "data-quality-testing"
    },

    // Advanced Level
    {
      title: "Real-time Data Streaming with Kafka",
      duration: "4 days",
      level: "Advanced",
      tracks: ["data"],
      description: "Build real-time data streaming architectures using Apache Kafka and stream processing",
      outcomes: [
        "Design event-driven data architectures",
        "Implement Kafka producers and consumers",
        "Build stream processing applications",
        "Handle high-throughput data streams"
      ],
      prerequisites: "Distributed systems knowledge, Java or Python",
      slug: "kafka-streaming-architecture"
    },
    {
      title: "Data Lake Architecture & Implementation",
      duration: "5 days",
      level: "Advanced",
      tracks: ["data"],
      description: "Design and implement scalable data lake architectures for enterprise data management",
      outcomes: [
        "Design multi-zone data lake architectures",
        "Implement data governance and security",
        "Build metadata management systems",
        "Optimize storage and access patterns"
      ],
      prerequisites: "Cloud platforms, distributed systems",
      slug: "data-lake-architecture"
    },
    {
      title: "MLOps & Data Pipeline Automation",
      duration: "4 days",
      level: "Advanced",
      tracks: ["data"],
      description: "Integrate machine learning workflows with data engineering pipelines",
      outcomes: [
        "Build ML-ready data pipelines",
        "Implement feature stores and versioning",
        "Automate model training and deployment",
        "Monitor ML data drift and quality"
      ],
      prerequisites: "ML basics, data pipeline experience",
      slug: "mlops-data-automation"
    },

    // Expert Level
    {
      title: "Distributed Data Systems Architecture",
      duration: "5 days",
      level: "Expert",
      tracks: ["data"],
      description: "Design and implement large-scale distributed data systems and architectures",
      outcomes: [
        "Architect multi-petabyte data systems",
        "Implement custom distributed processing frameworks",
        "Design for fault tolerance and scalability",
        "Optimize cross-region data replication"
      ],
      prerequisites: "Advanced distributed systems, multiple data technologies",
      slug: "distributed-data-architecture"
    },
    {
      title: "Data Mesh & Decentralized Architecture",
      duration: "3 days",
      level: "Expert",
      tracks: ["data"],
      description: "Implement data mesh principles for decentralized data architecture at enterprise scale",
      outcomes: [
        "Design domain-oriented data architectures",
        "Implement data product thinking",
        "Build federated data governance",
        "Create self-serve data platforms"
      ],
      prerequisites: "Enterprise architecture experience, data platform leadership",
      slug: "data-mesh-architecture"
    },
    {
      title: "Performance Optimization for Data Systems",
      duration: "4 days",
      level: "Expert",
      tracks: ["data"],
      description: "Advanced techniques for optimizing performance in large-scale data processing systems",
      outcomes: [
        "Profile and optimize data processing bottlenecks",
        "Implement custom indexing strategies",
        "Design high-performance storage solutions",
        "Optimize network and I/O operations"
      ],
      prerequisites: "Deep systems knowledge, performance engineering experience",
      slug: "data-systems-performance"
    }
  ]
};
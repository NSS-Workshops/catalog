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
      title: "ETL Pipeline Development with dbt",
      duration: "4 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Design and implement Extract, Transform, Load (ETL) pipelines using modern tools including dbt, Airflow, and other frameworks",
      outcomes: [
        "Build scalable ETL pipelines with dbt transformations",
        "Implement data modeling and testing with dbt",
        "Use Apache Airflow for workflow orchestration",
        "Handle batch and streaming data processing",
        "Implement version control for data transformations"
      ],
      prerequisites: "SQL and Python proficiency",
      slug: "etl-pipeline-development"
    },
    {
      title: "Data Warehousing with Cloud Platforms",
      duration: "3 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Build modern data warehouses using cloud platforms including Snowflake, AWS Redshift, GCP BigQuery, and Azure Synapse",
      outcomes: [
        "Design dimensional data models",
        "Implement data warehouses on Snowflake and other cloud platforms",
        "Optimize storage and query performance across different platforms",
        "Set up automated data ingestion and ELT processes",
        "Compare and contrast modern cloud warehouse architectures"
      ],
      prerequisites: "SQL expertise, basic cloud knowledge",
      slug: "cloud-data-warehousing"
    },
    {
      title: "Databricks & Apache Spark for Big Data",
      duration: "4 days",
      level: "Intermediate",
      tracks: ["data"],
      description: "Process large-scale datasets efficiently using Databricks platform with Apache Spark and PySpark",
      outcomes: [
        "Build Spark applications on Databricks platform",
        "Optimize Spark jobs for performance and cost",
        "Handle structured and unstructured data at scale",
        "Implement real-time data processing with Delta Lake",
        "Use Databricks collaborative notebooks and MLflow integration"
      ],
      prerequisites: "Python and SQL proficiency",
      slug: "databricks-spark-big-data"
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
      title: "Modern Lakehouse Architecture with Iceberg",
      duration: "5 days",
      level: "Advanced",
      tracks: ["data"],
      description: "Design and implement modern lakehouse architectures using Apache Iceberg, Delta Lake, and open-source technologies",
      outcomes: [
        "Design lakehouse architectures with ACID transactions",
        "Implement Apache Iceberg for table format management",
        "Build metadata management and catalog systems",
        "Optimize storage with columnar formats and partitioning",
        "Integrate with Trino/Presto for federated queries"
      ],
      prerequisites: "Cloud platforms, distributed systems",
      slug: "modern-lakehouse-architecture"
    },
    {
      title: "Advanced MLOps & Data Pipeline Automation",
      duration: "6 days",
      level: "Advanced",
      tracks: ["data"],
      description: "Integrate machine learning workflows with data engineering pipelines, including advanced monitoring and drift detection",
      outcomes: [
        "Build ML-ready data pipelines with feature stores",
        "Implement advanced drift detection (Kolmogorov-Smirnov, PSI)",
        "Automate model retraining and deployment workflows",
        "Monitor ML data quality with statistical tests",
        "Handle model versioning and A/B testing infrastructure",
        "Implement MLflow for experiment tracking and model registry"
      ],
      prerequisites: "ML basics, data pipeline experience, statistics knowledge",
      slug: "advanced-mlops-automation"
    },

    // Expert Level
    {
      title: "Petabyte-Scale Distributed Data Systems",
      duration: "5 days",
      level: "Expert",
      tracks: ["data"],
      description: "Design and implement petabyte-scale distributed data systems with zero-copy architectures and modern lakehouse technologies",
      outcomes: [
        "Architect multi-petabyte data systems with zero-copy optimization",
        "Implement Trino over lakehouse with Nessie for version control",
        "Design fault-tolerant systems with Ceph distributed storage",
        "Optimize cross-region data replication and consistency",
        "Build custom distributed processing frameworks for extreme scale"
      ],
      prerequisites: "Advanced distributed systems, multiple data technologies, storage systems knowledge",
      slug: "petabyte-distributed-systems"
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
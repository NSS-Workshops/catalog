export const devopsInfrastructure = {
  category: "DevOps & Infrastructure",
  tracks: ["devops"],
  description: "Deploy, monitor, and maintain production systems",
  workshops: [
    {
      title: "DevOps Fundamentals",
      duration: "2 days",
      level: "Intermediate",
      tracks: ["devops", "leadership"],
      description: "CI/CD, automation, and infrastructure as code",
      outcomes: ["Build CI/CD pipelines", "Automate deployments", "Implement monitoring"],
      prerequisites: "Application development experience",
      slug: "devops-fundamentals"
    },
    {
      title: "Docker & Container Essentials",
      duration: "2 days",
      level: "Intermediate",
      tracks: ["devops"],
      description: "Containerization fundamentals and best practices",
      outcomes: ["Containerize applications", "Write efficient Dockerfiles", "Manage multi-container apps"],
      prerequisites: "Basic DevOps knowledge",
      slug: "docker-container-essentials"
    },
    {
      title: "Kubernetes Orchestration",
      duration: "2 days",
      level: "Advanced",
      tracks: ["devops"],
      description: "Deploy and manage containerized applications at scale",
      outcomes: ["Deploy to Kubernetes clusters", "Configure networking and storage", "Implement rolling updates"],
      prerequisites: "Docker experience",
      slug: "kubernetes-orchestration"
    },
    {
      title: "Cloud Architecture on AWS",
      duration: "2 days",
      level: "Intermediate",
      tracks: ["devops", "leadership"],
      description: "Design and deploy scalable cloud solutions",
      outcomes: ["Design cloud architecture", "Deploy to AWS", "Implement security best practices"],
      prerequisites: "Infrastructure basics",
      slug: "cloud-architecture-aws"
    },
    {
      title: "Multi-Cloud Strategy & Architecture",
      duration: "2 days",
      level: "Advanced",
      tracks: ["devops", "leadership"],
      description: "Navigate AWS, Azure, and GCP for resilient systems",
      outcomes: ["Design multi-cloud architectures", "Manage cloud costs", "Implement disaster recovery"],
      prerequisites: "Single-cloud experience",
      slug: "multi-cloud-strategy"
    },
    {
      title: "Infrastructure as Code with Terraform",
      duration: "2 days",
      level: "Advanced",
      tracks: ["devops"],
      description: "Automate infrastructure provisioning and management",
      outcomes: ["Write Terraform configurations", "Manage state and modules", "Implement GitOps workflows"],
      prerequisites: "Cloud platform experience",
      slug: "infrastructure-as-code-terraform"
    },
    {
      title: "CI/CD Pipeline Design & Optimization",
      duration: "2 days",
      level: "Advanced",
      tracks: ["devops"],
      description: "Build efficient, reliable deployment pipelines",
      outcomes: ["Design pipeline architectures", "Implement blue/green deployments", "Integrate security scanning"],
      prerequisites: "CI/CD basics",
      slug: "cicd-pipeline-design"
    },
    {
      title: "Observability & Monitoring",
      duration: "2 days",
      level: "Intermediate",
      tracks: ["devops"],
      description: "Instrument and monitor production systems",
      outcomes: ["Implement logging strategies", "Create monitoring dashboards", "Set up alerting"],
      prerequisites: "Production system experience",
      slug: "observability-monitoring"
    },
    {
      title: "Site Reliability Engineering",
      duration: "2 days",
      level: "Advanced",
      tracks: ["devops", "leadership"],
      description: "Maintain reliable, scalable production systems",
      outcomes: ["Define SLOs and SLIs", "Design resilient systems", "Implement incident response"],
      prerequisites: "Production system experience",
      slug: "site-reliability-engineering"
    },
    {
      title: "Security & Compliance in DevOps",
      duration: "2 days",
      level: "Advanced",
      tracks: ["devops", "leadership"],
      description: "Build security into deployment pipelines",
      outcomes: ["Implement DevSecOps practices", "Automate security scanning", "Manage compliance requirements"],
      prerequisites: "DevOps experience",
      slug: "security-compliance-devops"
    },
    {
      title: "Cloud Cost Optimization",
      duration: "1 day",
      level: "Intermediate",
      tracks: ["devops", "leadership"],
      description: "Reduce cloud spending without sacrificing performance",
      outcomes: ["Analyze cloud costs", "Implement optimization strategies", "Set up cost monitoring"],
      prerequisites: "Cloud platform experience",
      slug: "cloud-cost-optimization"
    }
  ]
};
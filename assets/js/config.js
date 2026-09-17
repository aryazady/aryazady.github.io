// Toggle sections and content. Edit this file to customize the site.
const SITE_CONFIG = {
  name: "Dr. Alex Rivera",
  title: "Bioinformatician · Graph Neural Networks & Systems Biology",
  email: "alex.rivera@example.com",
  location: "Boston, MA",
  github: "https://github.com/alexrivera",
  linkedin: "https://linkedin.com/in/alexrivera",
  scholar: "https://scholar.google.com/citations?user=xxxx",
  photo: "assets/img/profile.jpg",
  cv: "assets/files/CV_Alex_Rivera.pdf",

  sections: {
    about: true,
    skills: true,
    experience: true,
    research: true,
    publications: true,
    education: true,
    projects: true,
    contact: true
  },

  about: "I design graph neural network architectures for modeling molecular interactions, gene regulatory networks, and protein-protein interaction graphs. My work bridges deep learning and systems biology to accelerate discovery in precision medicine.",

  skills: ["Python", "PyTorch", "PyTorch Geometric", "GNNs", "Systems Biology", "Single-cell Genomics", "Network Biology", "R / Bioconductor", "Docker", "AWS"],

  experience: [
    {
      role: "Senior Bioinformatics Scientist",
      org: "Genomix Therapeutics",
      period: "2023 — Present",
      desc: "Lead development of GNN models for drug-target interaction prediction across multi-omics graphs."
    },
    {
      role: "Computational Biologist",
      org: "BioNet Labs",
      period: "2021 — 2023",
      desc: "Built graph-based pipelines for gene regulatory network inference from single-cell RNA-seq."
    }
  ],

  education: [
    {
      degree: "Ph.D. in Bioinformatics",
      org: "Stanford University",
      period: "2017 — 2021",
      desc: "Dissertation: Graph Representation Learning for Protein-Protein Interaction Networks."
    },
    {
      degree: "B.S. in Computational Biology",
      org: "UC Berkeley",
      period: "2013 — 2017",
      desc: ""
    }
  ],

  research: [
    {
      title: "GNN-based Drug Repurposing",
      desc: "Heterogeneous graph attention networks over drug-gene-disease knowledge graphs to prioritize repurposing candidates."
    },
    {
      title: "Gene Regulatory Network Inference",
      desc: "Self-supervised graph learning for reconstructing regulatory networks from single-cell multi-omics data."
    }
  ],

  publications: [
    {
      title: "Graph Attention Networks for Predicting Protein-Protein Interactions",
      venue: "Bioinformatics, 2023",
      link: "#"
    },
    {
      title: "Self-Supervised Learning on Gene Regulatory Graphs",
      venue: "NeurIPS Workshop on Learning on Graphs, 2022",
      link: "#"
    },
    {
      title: "Heterogeneous GNNs for Drug Repurposing at Scale",
      venue: "PLOS Computational Biology, 2024",
      link: "#"
    }
  ],

  projects: [
    {
      name: "graphomics",
      desc: "Open-source PyTorch Geometric toolkit for multi-omics graph construction and GNN benchmarking.",
      link: "https://github.com/alexrivera/graphomics"
    }
  ]
};

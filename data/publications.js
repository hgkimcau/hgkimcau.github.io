export const VENUE_ALIASES = {
  neurips: {
    name: "Advances in Neural Information Processing Systems",
    short: "NeurIPS",
  },
  icml: {
    name: "International Conference on Machine Learning",
    short: "ICML",
  },
  iclr: {
    name: "International Conference on Learning Representations",
    short: "ICLR",
  },
  interspeech: {
    name: "Interspeech",
    short: "INTERSPEECH",
  },
  aistats: {
    name: "International Conference on Artificial Intelligence and Statistics",
    short: "AISTATS",
  },
  jmlr: {
    name: "Journal of Machine Learning Research",
    short: "JMLR",
  },
  tmlr: {
    name: "Transactions on Machine Learning Research",
    short: "TMLR",
  },
  aaai: {
    name: "AAAI Conference on Artificial Intelligence",
    short: "AAAI",
  },
  acl: {
    name: "Annual Meeting of the Association for Computational Linguistics",
    short: "ACL",
  },
  cvpr: {
    name: "IEEE/CVF Conference on Computer Vision and Pattern Recognition",
    short: "CVPR",
  },
  iccv: {
    name: "IEEE/CVF International Conference on Computer Vision",
    short: "ICCV",
  },
  eccv: {
    name: "European Conference on Computer Vision",
    short: "ECCV",
  },
  icip: {
    name: "IEEE International Conference on Image Processing",
    short: "ICIP",
  },
  ijcai: {
    name: "International Joint Conference on Artificial Intelligence",
    short: "IJCAI",
  },
  ieee_access: {
    name: "IEEE Access",
    short: "IEEE Access",
  },
  ieee_spl: {
    name: "IEEE Signal Processing Letters",
    short: "IEEE SPL",
  },
  ieee_tifs: {
    name: "IEEE Transactions on Information Forensics and Security",
    short: "IEEE TIFS",
  },
  ieee_tip: {
    name: "IEEE Transactions on Image Processing",
    short: "IEEE TIP",
  },
  ieee_tcsvt: {
    name: "IEEE Transactions on Circuits and Systems for Video Technology",
    short: "IEEE TCSVT",
  }
};


export const PUBLICATIONS = [
  {
    title: "ArtBoost: Synthetic Articulatory Data Augmentation for Acoustic-to-Articulatory Inversion",
    titleSentenceCase: false,
    category: "conference",
    authors: [
      "Hyung Kyu Kim",
      "Byungchan Hwang",
      "Hak Gu Kim",
    ],
    year: 2026,
    venue: "interspeech",
    status: "to_appear",
    isNew: true,
  },
  {
    title: "Deformable 3D Point Cloud Perturbations using Cage-based Deformation for Semantic Consistency",
    titleSentenceCase: false,
    category: "journal",
    authors: [
      "Kyo Seok Lee",
      "Hak Gu Kim",      
    ],
    year: 2026,
    venue: "ieee_tifs",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/11534487" },
      { label: "Project", url: "https://cau-irislab.github.io/Deformable-3D-ADV/" },
    ],
    isNew: true,
  },
  {
    title: "Unsharp-Inspired Adversarial Point Cloud Perturbation via Low-Rank Approximation",
    titleSentenceCase: false,
    category: "journal",
    authors: [
      "Kyo Seok Lee",
      "Han-nyoung Lee",
      "Hak Gu Kim",      
    ],
    year: 2026,
    venue: "ieee_spl",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/11320277" },      
    ],
    isNew: true,
  },
  {
    title: "MemoryTalker: Personalized Speech-Driven 3D Facial Animation via Audio-Guided Stylization",
    titleSentenceCase: false,
    category: "conference",
    authors: [
      "Hyung Kyu Kim",
      { name: "Sangmin Lee", corresponding: true },
      { name: "Hak Gu Kim", corresponding: true },
    ],
    year: 2025,
    venue: "iccv",
    links: [
      { label: "Paper", url: "https://openaccess.thecvf.com/content/ICCV2025/html/Kim_MemoryTalker_Personalized_Speech-Driven_3D_Facial_Animation_via_Audio-Guided_Stylization_ICCV_2025_paper.html" },
      { label: "Project", url: "https://cau-irislab.github.io/ICCV25-MemoryTalker/" },
      { label: "Code", url: "https://github.com/kimhyungkyu-1208/MemoryTalker" },
    ],
    isNew: false,
  },
  {
    title: "Enhancing 3D Scene Representation with Structural Dissimilarity-Aware Learning",
    titleSentenceCase: false,
    category: "conference",
    authors: [
      "Seungjae Lee",
      "Ho Jun Kim",
      "Hak Gu Kim",
    ],
    year: 2025,
    venue: "icip",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/11084453" },
    ],
    isNew: false,
  },
  {
    title: "Learning Phonetic Context-Dependent Viseme for Enhancing Speech-Driven 3D Facial Animation",
    titleSentenceCase: false,
    category: "conference",
    authors: [
      "Hyung Kyu Kim",
      "Hak Gu Kim",
    ],
    year: 2025,
    venue: "interspeech",
    links: [
      { label: "Paper", url: "https://www.isca-archive.org/interspeech_2025/kim25r_interspeech.pdf" },
      { label: "Project", url: "https://cau-irislab.github.io/interspeech25/" },
      { label: "Code", url: "https://github.com/kimhyungkyu-1208/interspeech25" },
    ],
    isNew: false,
  },
  {
    title: "Leveraging Text Signed Distance Function Map for Boundary- Aware Guidance in Scene Text Segmentation",
    titleSentenceCase: false,
    category: "journal",
    authors: [
      "Ho Jun Kim",
      "Hak Gu Kim",
    ],
    year: 2025,
    venue: "ieee_access",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10981835?source=authoralert" },
    ],
  },
  {
    title: "MSCoTDet: Language-driven Multi-modal Fusion for Improved Multispectral Pedestrian Detection",
    titleSentenceCase: false,
    category: "journal",
    authors: [
      "Taeheon Kim",
      "Sangyun Chung",
      "Damin Yeom",
      "Youngjoon Yu",
      "Hak Gu Kim",
      "Yong Man Ro"
    ],
    year: 2025,
    venue: "ieee_tcsvt",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10819422?source=authoralert" },
    ],
  },
  {
    title: "Unveiling the Potential of Multimodal Large Language Models for Scene Text Segmentation via Semantic-Enhanced Features",
    titleSentenceCase: false,
    category: "workshop",
    authors: [
      { name: "Ho Jun Kim", equalContribution: true },
      { name: "Hyung Kyu Kim", equalContribution: true },
      "Sangmin Lee",
      "Hak Gu Kim",
    ],
    year: 2024,
    venue: "icip",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10769199" },
    ],
  },
  {
    title: "Analyzing Visible Articulatory Movements in Speech Production for Speech-Driven 3D Facial Animation",
    titleSentenceCase: false,
    category: "conference",
    authors: [
      "Hyung Kyu Kim",
      "Sangmin Lee",      
      "Hak Gu Kim",
    ],
    year: 2024,
    venue: "icip",    
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10647359" },
    ],
  },
  {
    title: "Causal Mode Multiplexer: A Novel Framework for Unbiased Multispectral Pedestrian Detection",
    titleSentenceCase: false,
    category: "conference",
    authors: [
      "Taeheon Kim",
      "Sebin Shin",
      "Youngjoon Yu",
      "Hak Gu Kim",
      "Yong Man Ro",      
    ],
    year: 2024,
    venue: "cvpr",
    links: [
      { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2024/html/Kim_Causal_Mode_Multiplexer_A_Novel_Framework_for_Unbiased_Multispectral_Pedestrian_CVPR_2024_paper.html" },
      { label: "Code", url: "https://github.com/ssbin0914/Causal-Mode-Multiplexer" },
      { label: "Demo", url: "https://www.youtube.com/watch?v=l286OutJalQ" },
    ],
  },
  {
    title: "Super-Resolution Neural Radiance Field via Learning High Frequency Details for High-Fidelity Novel View Synthesis",
    titleSentenceCase: false,
    category: "journal",
    authors: [
      "Han-nyoung Lee",      
      "Hak Gu Kim",
    ],
    year: 2024,
    venue: "ieee_spl",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10413538" },
    ],
  },
  {
    title: "Photometric Stereo Super Resolution via Complex Surface Structure Estimation",
    titleSentenceCase: false,
    category: "journal",
    authors: [
      "Han-nyoung Lee",      
      "Hak Gu Kim",
    ],
    year: 2024,
    venue: "ieee_access",
    links: [
      { label: "Paper", url: "https://ieeexplore.ieee.org/document/10411890" },
    ],
  }
];

/*
AUTOGENERATED FILE
- Edit data/publications_source.md
- Rebuild: python3 scripts/sync_publications.py
- Validate: python3 scripts/sync_publications.py --check
*/

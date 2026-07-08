import type { Project } from '../types/project'

export const projects: Project[] = [
  {
    slug: 'cpu-sim',
    name: 'RISC-V CPU Simulator',
    shortDescription:
      'A cycle-accurate RV32 teaching simulator with a Qt6 GUI. Visualize pipeline execution, cache behavior, and branch prediction in real time.',
    image: 'images/cpu-sim/thumbnail.svg',
    githubUrl: 'https://github.com/nishadelias/CPU_SIM',
    overview: [
      'This is a cycle-accurate RISC-V CPU simulator built for computer architecture education. Unlike a disassembler or a trace dump, you can watch instructions move through a five-stage pipeline — fetch, decode, execute, memory, writeback — cycle by cycle. You can also swap cache organizations and branch predictors and immediately see the impact on hit rate, prediction accuracy, and CPI.',
      'The simulator models a 32-bit RISC-V pipeline with hazard detection, forwarding, branch prediction, and a unified cache in front of 64 kilobytes of RAM. It is a teaching tool — not a replacement for QEMU or Spike — but that is the point: everything is visible and measurable.',
      'Three things make this useful in a classroom: visualization (you see stalls and flushes), experimentation (swap cache or predictor and rerun), and implementation (students extend the simulator with their own algorithms using step-by-step guides for custom cache schemes and branch predictors).',
    ],
    techStack: [
      'C++17',
      'CMake',
      'Qt6',
      'RV32IMCF',
      'GitHub Actions CI',
    ],
    videoSections: [
      {
        number: 1,
        title: 'What Is This, and Why Use It in Class?',
        suggestedTitle:
          'RISC-V CPU Simulator for Computer Architecture Classes (Overview)',
        summary:
          'An introduction to the simulator and its educational niche. Covers what the tool models — a five-stage pipeline with branch prediction and a unified cache — and walks through a quick start demo loading and running a program in the GUI. Explains how visualization, experimentation, and student extensibility make it useful for computer architecture courses.',
      },
      {
        number: 2,
        title: 'Seeing the Pipeline: Stalls, Forwarding, and Dependencies',
        suggestedTitle:
          'Watch a 5-Stage Pipeline Run Cycle-by-Cycle (Educational CPU Sim)',
        summary:
          'A cycle-by-cycle walkthrough of the pipeline execution trace, register file, and instruction dependencies. Demonstrates data forwarding with a hand-written hex program, optional load-use stalls, and memory access history — the material that is usually hardest to teach from a textbook alone.',
      },
      {
        number: 3,
        title: 'Branch Prediction Lab: Compare, Measure, Learn',
        suggestedTitle:
          'Branch Prediction Lab: From 37% to 96% Accuracy in One Dropdown',
        summary:
          'Uses the branch-heavy count_primes program to compare Always Not Taken (~37% accuracy) against GShare (~96% accuracy). Shows how mispredictions cause pipeline flushes and CPI increases, and how a dropdown change produces dramatic performance swings. Covers the CLI benchmark workflow and the student lab for implementing custom predictors.',
      },
      {
        number: 4,
        title: 'Cache Experiments and Building Your Own Components',
        suggestedTitle:
          'Cache Experiments + How Students Build Their Own Predictors',
        summary:
          'Compares direct-mapped, set-associative, and fully associative cache organizations on a Fibonacci program. Ties cache misses to specific addresses in the memory access history, then walks through the extensibility frameworks for implementing custom cache schemes and branch predictors. Closes with a full course narrative mapping syllabus topics to simulator features.',
      },
    ],
    bonusVideo: {
      title: 'Hex Programs, No Toolchain',
      summary:
        'A quick demo showing that you do not need a RISC-V cross-compiler to use the simulator. The instruction_memory/ folder has ready-made hex programs for forwarding, load-use hazards, and more — zero setup beyond building the simulator.',
    },
    links: [
      {
        label: 'GitHub Repository',
        url: 'https://github.com/nishadelias/CPU_SIM',
      },
      {
        label: 'Instructor Guide',
        url: 'https://github.com/nishadelias/CPU_SIM/blob/main/INSTRUCTOR.md',
      },
      {
        label: 'Cache Schemes Lab Guide',
        url: 'https://github.com/nishadelias/CPU_SIM/blob/main/CACHE_SCHEMES.md',
      },
      {
        label: 'Branch Predictors Lab Guide',
        url: 'https://github.com/nishadelias/CPU_SIM/blob/main/BRANCH_PREDICTORS.md',
      },
    ],
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}

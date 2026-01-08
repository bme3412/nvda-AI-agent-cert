import re
import os

# Read the ContentViewer.tsx file
with open('app/components/ContentViewer.tsx', 'r') as f:
    content = f.read()

# Pattern to match quiz entries for 4-deployment-scaling files 2-8
# We'll extract each one individually
quiz_files = [
    ('2', 'TensorRTLLM-Github'),
    ('3', 'measure-improve-AI-workload'),
    ('4', 'Kubernetes-glossary'),
    ('5', 'NVDA-NSight'),
    ('6', 'Kube-Prometheus'),
    ('7', 'scaling-LLM-Kubernetes'),
    ('8', 'TensorRT-performance-analysis'),
]

for num, name in quiz_files:
    # Pattern to match the specific quiz entry
    pattern = rf"'4-deployment-scaling/{num}-{name}\.txt':\s*\[(.*?)\](?=\s*,\s*\n\s*'|\s*\n\s*\}})"
    
    match = re.search(pattern, content, re.DOTALL)
    if match:
        quiz_data = match.group(1).strip()
        
        # Create the TypeScript file
        ts_content = f"""import {{ QuizQuestion }} from '../types';

export const questions: QuizQuestion[] = [
{quiz_data}
];
"""
        
        filename = f"app/data/quizzes/4-deployment-scaling/{num}-{name}.ts"
        print(f"Creating {filename}...")
        
        with open(filename, 'w') as f:
            f.write(ts_content)
        
        print(f"  ✓ Created {filename}")
    else:
        print(f"  ✗ Could not find quiz data for {num}-{name}")

print("\nDone!")


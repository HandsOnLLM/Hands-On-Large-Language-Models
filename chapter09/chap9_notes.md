# Topic: Chapter 9 - Multimodal LLM
Date: 2026-02-07

## Key Clues / Questions
- Quais os diferentes tipos de modelos? 
	- Vision models (ViT - vision transformes) - para imagens
	- Text models
	- Multimodel - CLIP - embedding both images and texts
	
- Como é o processo realizado pelo CLIP?
	- first step of training: images and texts are embedded using image and text encoder
	- second step of training: the similarity between the sentence and image embedding is calculated using cosine similatiry
	- third step of training: text and image encoders are updated to match what the intended similarity should be. The embeddings are closer in vector space if the inputs are similar

- Qual é o critério utilizado para similaridade entre texto e imagem?
	- cosine similarity
- Como podemos montar um pipeline com diferentes modelos? Quais são as vantagens e as desvantagens?
- O que é o Q-Former?
- Qual a importância do preprocessing para os modelos de imagem e texto?
- O que é o constrastive learning?
	- CLIP = constrative language-image pre-training
	- CLIP uses contrastive learning to align image and text embeddings in a shared space, allowing for tasks like zero-shot classification, clustering, and search.

<aside> 
Key Cues / Questions
- What is X?
- Why use Y?
</aside>

## Main Notes
- Vision models
- Multimodel embedding models
- CLIP - embedding both images and text
- BLIP-2 model

Modalidade - o tipo de dados que os modelos lida, por exemplo texto, imagem, audio, video, sensor.
Umo modelo pode receber uma destas modalidades como input.


**ViT - Vision Transformers**
Image -> patches of images ->  encoder -> treated as if they are textual tokens -> embeddings 

**Multimodal Embedding Model**
- Can capt both textual as well as visual representations
- CLIP - constrative language-image pre-training
- Result of embeddings: the same vector space. The embeddings of images can be compared with the embeddings of text
- Modeling similarity is not only knowing what makes things similar to one another, but also what makes them different and dissimilar

OpenCLIP
- é preciso preprocessar a imagem antes de rodar no modelo
- quando utilizamos sentence-transformers, ele implementa alguns CLIP-based models, tornando a criação dos embeddings mais fácil


BLIP-2
Techinique to introduce vision capabilities to existing language models

Q-Former - connect pretrained image encoder and a pretrained LLM.
That bridge is the only trainable component of the pipeline

Components of pipeline
Processor, like tokenizer of language models
Model

**Use cases**
- image captioning
	- Load image -> convert image into token IDs (using BLIP-2) -> convert IDs into text (the generated caption
- multimodal chat-based prompting


---
## Sumary
Neste capítulo vimos como integrar modelos de texto e imagem. A capacidade de ambos ampliada quando trabalham juntos.
Porém, como cada modelo foi treinado com uma modalidade, é preciso usar uma ponte treinável, chamada BLIP-2. Existem outros modelos com esta mesma arquitetura disponível.

## References
[OpenCLIP](https://github.com/mlfoundations/open_clip)



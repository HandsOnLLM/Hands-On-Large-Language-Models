
## Main Notes
- em 2018 o Google passou a utilizar o BERT para fortalecer o Google Search
- Semantic search enables searching by meaning, not simply keyword
- Dense retrieval - rely on the similarity of text embeddings to retrieve relevant results
- Reranking - score relevant subset of results, take additional input, a set of search from a previous step in search pipeline
- RAG - retrieval-augmented generation, generative LLM at the end of the pipeline to formulate an answer based on retirved documents while citing sources
- As system designer, you need to set the max threshold of similarity, based on what you need to filter
- Dense retrieval works well only on trained domains
- For exact search, better use keyword matching or hybrid (keyword + semantic search)


### Chunk long texts
- one vector per document - sincle vector to represent the whole document
	- embedding only a representative part of the document (title, beginning)
	- document embedded in chunks, those chunks embedded on chunks, those chunks in a single vector - highly compressed vector, loses a lot of information 
- multiple vector per document
	- each sentence -> chunk
	- each paragraph -> chunk
	- add meaning (context) -> chunk overlap

### Vector database
- add or delete vectors without having to rebuild the index

### Fine tunning
- get trainning data composed of queries and relevant results
- get some irrelevant examples too for the querie (negative)
- make relevant queries closer to the document
- make irrelevant queries distance from the document

### Reranking
- first-stage retriever: search (dense, keyword or hybrid)
- second-stage: rerank by relevance score
- monoBERT - multi-stage document ranking with BERT - Using Transformers to rerank 

### Evaluation metrics
- são métricas de IR (information retrieval)
- MAP (mean average precision) - calcula a média da média (mean average) dos resultados com base no acerto e posição em que foram considerados
- nDCG - normalized discounted cumulative gain

### RAG (retrieval-augmented generation)
- incorporate search capabilities to generation capabilities
- reduce hallucination and improve their factuality
- chat with my data
- grounded generation = generation step, estabilish a certain context

Example
Como foi elaborado no livro:
- text generation model: phi-3-min-4k-instruct-fp16.gguf
- embedding language model: BAAI 
- embedding model to set the vector database - FAISS
- RAG prompt: communicate the relevant documentss to the LLM 'input variables and context

### Advanced RAG techniques
- query rewriting - use an LLM to aids the retrieval step in getting the right information
- multi-query - split the query rewriting to search multiple queries
- multi-hop RAG - series of sequential queries
- query routing - for search multiple data sources - question about HR -> search on Notion, question about customer -> search on CRM
- agentic RAG

### RAG evaluation
Human evaluation
- fluency
- perceived utility
- citation recall
- citation precision

- LLM-as-a-judge

Ragas - system to score and more useful metrics


---


**Faiss**
Faiss is a library for efficient similarity search and clustering of **dense vectors**. It contains algorithms that search in sets of vectors of any size, up to ones that possibly do not fit in RAM. It also contains supporting code for evaluation and parameter tuning. Faiss is written in C++ with complete wrappers for Python/numpy. Some of the most useful algorithms are implemented on the GPU. It is developed primarily at Meta's Fundamental AI Research group.

**Sentence Transformers** (a.k.a. SBERT) is the go-to Python module for accessing, using, and training state-of-the-art embedding and reranker models. It can be used to compute embeddings using Sentence Transformer models ([quickstart](https://www.sbert.net/docs/quickstart.html#sentence-transformer)), to calculate similarity scores using Cross-Encoder (a.k.a. reranker) models ([quickstart](https://www.sbert.net/docs/quickstart.html#cross-encoder)), or to generate sparse embeddings using Sparse Encoder models ([quickstart](https://www.sbert.net/docs/quickstart.html#sparse-encoder)). This unlocks a wide range of applications, including [semantic search](https://www.sbert.net/examples/sentence_transformer/applications/semantic-search/README.html), [semantic textual similarity](https://www.sbert.net/docs/sentence_transformer/usage/semantic_textual_similarity.html), and [paraphrase mining](https://www.sbert.net/examples/sentence_transformer/applications/paraphrase-mining/README.html).


### **References**
[Cohere Tutorial](https://github.com/cohere-ai/cohere-developer-experience/blob/main/notebooks/guides/getting-started/v2/tutorial_pt4_v2.ipynb)

[FAISS](https://github.com/facebookresearch/faiss?tab=readme-ov-file)

[Rerank API](https://docs.cohere.com/reference/rerank)

[Sentence Transformers](https://www.sbert.net/)


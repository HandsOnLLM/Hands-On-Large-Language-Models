# Bonus Material

With the incredible growth of Language AI in recent years, capturing everything in a single book (even with 400 pages!) 
is near impossible. That does not mean one should not try and come up with a creative solution to this problem of size and growth.

We decided to cover the fundamentals of LLMs in the book which left us with an interesting opportunity. 
Using the book as a starting point, we could continue creating visual/illustrative content that explore 
certain topics in-depth that could not be covered that way in the book.

<p align="center"><i>All bonus materials enhance the book through the same <b>visual</b> and <b>illustrative</b> style of the book</i></p>

After reading the book, you are ready to go through these more complex topics through highly visual, detailed, and in-depth guides. Because you are already familiar with our illustrative styles, reading through these advanced concepts should be a breeze!

<p align="center">
<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts"><img src="../images/bonus_overview.png" width="100%" height="100%"></a>
</p>

# [A Visual Guide to Quantization](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization) (Extends Chapters 7 and 12)

In the book, we cover the concept of quantization and showcase how it can be used to reduce computational requirements for both training and fine-tuning.

[A Visual Guide to Quantization](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization) dives deeper into the technical intricacies of the technique, building upon the foundational concepts we introduced in the book. 
 
<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization"><img src="../images/bonus_int8.png" width="50%" height="50%"></a>

The guide explore various quantization methods, such as as post-training quantization and quantization-aware training. It even showcases BitNet, a method by which we can get ternary parameters (3 values!). 

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-quantization"><img src="../images/bonus_bitnet.png" width="50%" height="50%"></a>

By extending the book's coverage, readers can quickly get up to speed with the advanced topics covered in the guide. It serves as an excellent next step in the reading material. 

# [A Visual Guide to Mamba](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state) (An "Alternative" Chapter 3)

Instead of extending Chapter 3, let's "replace" it! Or more accurately, let's provide an alternative.

[A Visual Guide to Mamba and State Space Models](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state) provides an exciting alternative to the transformer architecture discussed in Chapter 3. While the chapter focuses on decoder-based transformer models, this blog introduces readers to a fundamentally different approach to sequence modeling.

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state"><img src="../images/bonus_ssm.png" width="50%" height="50%"></a>

By exploring this alternative architecture, the blog complements Chapter 3 by showing you there is more to this field than transformers. Exciting hybrid architectures even start [combining Transformer- and Mamba blocks](https://www.ai21.com/blog/announcing-jamba).

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mamba-and-state"><img src="../images/bonus_ssm1.png" width="50%" height="50%"></a>

# [A Visual Guide to Mixture of Experts](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts) (Extends Chapter 3)

Chapter 3 gives a solid foundation for traditional transformer decoders and how they work. We also cover more advanced topics like efficient attention and advancements in positional embeddings. 

One topic that we did not discuss in detail that has been gaining traction is called Mixture of Experts. It is a technique that enhances these transformer decoders by incorporating multiple specialized sub-networks or "experts."

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts"><img src="../images/bonus_moe.png" width="50%" height="50%"></a>

[A Visual Guide to Mixture of Experts (MoE)](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts) illustrates how MoE models dynamically route different inputs to the most appropriate experts, allowing for more efficient processing of diverse language tasks. 

As another bonus, the blog continues into the field of vision language models:

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts"><img src="../images/bonus_vmoe.png" width="50%" height="50%"></a>

By connecting this advanced concept to the decoder fundamentals covered in Chapter 3, readers can quickly dive into the seemingly complex but in practice straightforward method of Mixture of Experts. 

# [The Illustrated Stable Diffusion](https://jalammar.github.io/illustrated-stable-diffusion/) (Extends Chapters 9)

In Chapter 9, we cover the Vision Transformer (ViT) and explore how text and images can be modeled together through CLIP. We showcase how CLIP can be used to bring images to textual models, allowing them to "reason" about images as well as text.

But CLIP can also be used for the opposite, bringing text to vision models, allowing to use the input text as guidance for the images they create. 

[The Illustrated Stable Diffusion](https://jalammar.github.io/illustrated-stable-diffusion/) explores the role of CLIP in stable diffusion which it does in the highly visual way that you can expect having read the book. 

<a href="https://jalammar.github.io/illustrated-stable-diffusion/"><img src="../images/bonus_sd.png" width="50%" height="50%"></a>

It further illustrates stable diffusion's inner working, showing how it combines CLIP's capabilities with advanced diffusion models to create high-quality images from text prompts. 

<a href="https://jalammar.github.io/illustrated-stable-diffusion/"><img src="../images/bonus_sd1.png" width="50%" height="50%"></a>

The book focuses mostly on generating text but the process of generating images has significant overlap. The illustrated guide complements Chapter 9 well as more architectures, technologies and methods enter different domains and modalities.


# [A Visual Guide to Reasoning LLMs](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-reasoning-llms) (Extends Chapters 6 and 12)

In the book, we cover the concept of chain-of-thoughs to improve the quality of outputs through extended reasoning. 

[A Visual Guide to Reasoning LLMs](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-reasoning-llms) dives deeper into making LLMs demonstrate extensive reasoning process. It describes the paradigm shift from **train-time compute** (more data, longer training, larger models) which is a focus of this book to the **test-time compute** (extend inference through "reasoning").

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-reasoning-llms"><img src="../images/bonus_reasoning1.png" width="50%" height="50%"></a>

This guide explores various technique, both during training and during inference, to distill reasoning into LLMs. There is also a section describing an extremely impactful model in 2024, namely DeepSeek-R1.

<a href="https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-reasoning-llms"><img src="../images/bonus_reasoning2.png" width="50%" height="50%"></a>


# [The Illustrated DeepSeek-R1](https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1/) (Extends Chapters 12)

In Chapter 12, we go through common techniques for creating and fine-tuning a model, namely language modeling, supervised fine-tuning and preference tuning. This chapter focuses on non-reasoning models and shows how you can fine-tune a model yourself. 

The impact of DeepSeek-R1 has been phenomenol as an open-weights LLM rivaling OpenAI's o1 model. DeepSeek-R1 is a reasoning LLM that was released unexpectly.

[The Illustrated DeepSeek-R1](https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1/) explores the model and its training process. It goes through the various steps they use to create a model with such exception capabilities. 

Interestingly, the model uses rule-based verifiers to make sure that it's reasoning process follows a certain standard, such as making sure that the code can actually compile:

<a href="https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1/"><img src="../images/bonus_deepseek1.png" width="70%" height="70%"></a>

The architecture is that of a [Mixture-of-Experts](https://newsletter.maartengrootendorst.com/p/a-visual-guide-to-mixture-of-experts) and with 256 experts (8 activated at a time), quite large:

<a href="https://newsletter.languagemodels.co/p/the-illustrated-deepseek-r1/"><img src="../images/bonus_deepseek2.png" width="70%" height="70%"></a>

# 配置说明

这里提供了若干运行本书中代码的方法。其中，有两种推荐方法，一种用于本地环境，另一种用于基于云的环境：

* **本地**: Using a [Conda](../.setup/conda) environment
* **云端**: Using [Google Colab Notebooks](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models/tree/main?tab=readme-ov-file#table-of-contents)

## 快速开始

如果您本地已有 Python (3.10.*) 环境并安装了 Microsoft Visual C++ 14.0 或更高版本，即可在此存储库的根目录下通过以下方式安装完整开发环境：

```bash
pip install -r requirements.txt
```

> [!WARNING]
> If you get the following error `error: Microsoft Visual C++ 14.0 or greater is required.` then you will need to install C++. 
> Follow the instructions [here](common_issues.md) for an installation guide before you can install your environment.

If you have conda installed (this **does not** require an additional installation of C++), you can also install the complete environment as follows at the root of this repository:

```bash
conda env create -f environment.yml
```

> [!TIP]
> After preparing your environment, it is recommended to install the GPU version of PyTorch following the instructions [here](https://pytorch.org/) as most examples will require a GPU.

For a complete tutorial on setting up your environment, visit the [conda example](../.setup/conda).

# 配置说明

这里提供了若干运行本书中代码的方法。其中，有两种推荐方法，一种用于本地环境，另一种用于基于云的环境：

* **本地**: Using a [Conda](../.setup/conda) environment
* **云端**: Using [Google Colab Notebooks](https://github.com/HandsOnLLM/Hands-On-Large-Language-Models/tree/main?tab=readme-ov-file#table-of-contents)

## 快速开始

如果您本地已有 Python (3.10.*) 环境并安装了 Microsoft Visual C++ 14.0 或更高版本，则可以在此存储库的根目录下,通过以下方式安装完整开发环境：

```bash
pip install -r requirements.txt
```

> [!WARNING]
如果遇到以下错误提示：error: Microsoft Visual C++ 14.0 or greater is required.，说明需要安装C++组件，请先按照此处的安装指南进行操作：

如果您已安装conda（无需额外安装C++组件），也可以通过以下方式在此存储库的根目录下安装完整开发环境：

```bash
conda env create -f environment.yml
```

> [!TIP]
> After preparing your environment, it is recommended to install the GPU version of PyTorch following the instructions [here](https://pytorch.org/) as most examples will require a GPU.

For a complete tutorial on setting up your environment, visit the [conda example](../.setup/conda).

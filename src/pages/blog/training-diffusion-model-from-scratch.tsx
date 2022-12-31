import { type NextPage } from "next";
import Head from "next/head";
import Nav from "../../../components/Nav";
import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/components/prism-python.min";
import Footer from "../../../components/Footer";

const blogPage = () =>{
    useEffect(() => {
        Prism.highlightAll();
      }, []);

    return ( 
    <>
    <Head>
        <title>donahue.dev</title>
        <meta name="description" content="Donahue's webpage" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    <Nav current={"blog"} />
    <main>
    <div style={{display: 'grid', gridTemplateColumns: "1fr min(48rem, 100%) 1fr" }} >
    <div style={{gridColumn: 2}}>
    <div className="my-8 font-bold text-4xl">Creating a dataset for training a diffusion model from scratch</div>
    <p className="mb-2">This blog post is a solution to an exercise from the Hugging Face Diffusions Models course.
        If you want to learn about how diffusion models work I strongly recommend reading <a className="text-blue-500" href="https://github.com/huggingface/diffusion-models-class/tree/main/unit1"> their explanation </a>and going through the course yourself.</p>
    <p className="mb-6">Here we will be finding and using our own dataset instead of using one from the Hugging Face Hub.</p>

    <h3 className="text-2xl my-4">Setting up the dataset</h3>
    <p className="mb-6">The dataset I've chosen is called <a className="text-blue-500" href="https://www.kaggle.com/datasets/hasibalmuzdadid/shoe-vs-sandal-vs-boot-dataset-15k-images">Shoe vs Sandal vs Boot</a>.
         It was uploaded for classification problems and contains 15,000 images, 5,000 of each type.</p>
    <figure className="my-10">
    <img  src="/post-1/shoe-vs-sandal-vs-boot-dataset.png" alt="A few of the images in the dataset"></img>
    <figcaption className="flex justify-center text-gray-800">A few of the images in the dataset</figcaption>
    </figure>
    <p className="mb-6">To create a custom Dataset class in Pytorch we subclass Dataset and implement  <em>__init__</em>, <em>__len__</em>, and <em>__getitem__</em>.</p>
    <div className="text-xl mb-6">
        __init__
    </div>
    <p>__init__ runs once. It will define the transforms we're applying to our dataset and initialize the directory containing our data.</p>
    <div className="my-6">
        Our file organization includes subfolders named Boot, Shoe, and Sandal. We'll use img_labels to traverse the 
        directory in __getitem__ as well as to label the data. We also count the size of our training data for the __len__ function.
    </div>
    </div>
    <pre style={{gridColumnStart: 1, gridColumnEnd: -1, width: 'fit-content', justifySelf: 'center'}}><code className="language-python">
        
        {`class BootSandalShoeDataset(Dataset):
        def __init__(self, annotations_file, img_dir, transform=None, target_transform=None):
            self.img_dir = img_dir
            self.transform = transform
            self.target_transform = target_transform
            self.img_labels = ['Boot', 'Sandal', 'Shoe']
            self.length = 0
            # Count how many images we have.
            for label in self.img_labels:
                self.length += len(os.listdir(os.path.join(img_dir, label)))`}
    </code>
    </pre>
    <div style={{gridColumn: 2}}>    
    <div className="text-xl my-6">
        __getitem__
    </div>
    <p>__getitem__ finds the image on disk, applies the transformations, and returns the corresponding label and tensor.
         We need to find the correct path for every index. In our case, 1 maps to img_dir/Boot/boot (1).jpg and so on.</p>
    <div>
    </div>
    </div>
    <pre style={{gridColumnStart: 1, gridColumnEnd: -1, width: 'fit-content', justifySelf: 'center'}}><code className="language-python">	
    {`def __getitem__(self, idx):
        #since we know there's 15000 items we will
        #map 0-4999 to be boots, 5000-9999 Sandals, and 10000-14999 Shoes
        label = self.img_labels[idx//5000]
        index = (idx%5000) + 1
        img_path = os.path.join(self.img_dir, label,  "{} ({}).jpg".format(label, index))
        image = read_image(img_path)
        if self.transform:
            image = self.transform(image)
        if self.target_transform:
            label = self.target_transform(label)
        return image, label`}
    </code>
    </pre>
    
    <div style={{gridColumn: 2}}>    
    <div className="mt-8">
        
        for __len__ we just return self.length we created earlier.
    </div>

    <div>
        <div className="text-xl mt-8 mb-2">
        And that's it!
        </div>
        We can now use our dataset for training.
    </div>
    

    <div className="flex flex-wrap gap-4 justify-center my-14">
        <img src="/shoes/download (1).png" />
        <img src="/shoes/download (2).png" />
        <img src="/shoes/download (3).png" />
        <img src="/shoes/download (4).png" />
        <img src="/shoes/download (5).png" />
        <img src="/shoes/download (6).png" />
        <img src="/shoes/download (7).png" />
        <img src="/shoes/download (8).png" />
        <img src="/shoes/download (9).png" />
    </div>
    <div className="mt-8">
        We've done it! You might notice the backgrounds look tinted.
         The loss function used, Mean Squared Error, punishes extremes and pushes the colors towards the average. You can find the <a  className="text-blue-500" href="https://github.com/DonahueA/Shoe-Diffusion">jupyter notebook here</a>.
    </div>
    </div>
    </div>
    </main>
    <Footer />
    </>)
}

export default blogPage
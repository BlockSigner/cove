# cove
Skribble **co**rporate **ve**bsite


## Use
### Prerequisites
Install the latest
- Node.js https://github.com/nodejs/node
- NPM https://github.com/npm/cli
- Yarn https://github.com/yarnpkg/yarn.

Use `yarn` to lock and install dependency versions instead of `npm install`.
```
# install dependencies via yarn
$ yarn
```

### Development
Use `yarn start` to develop locally.

Use `yarn build` to build locally.

### Using GitHub Desktop
Download the GitHub desktop app to easily track changes in the repository: https://desktop.github.com/. Before working on the content files, make sure to checkout the current version of master. Just follow the steps below:

- fetch origin
- create a new branch and prefix with your name. I (David) create a branch _david-instructions_.
- open the repository in your external editor
- update the content in the editor. You can switch back to the GitHub desktop app and track the changes you made.
- when done with all the changes, write a short meaningful summary and commit
- publish/push the branch

After publishing, your changes appear on the cove GitHub page of BlockSigner: https://github.com/BlockSigner/cove. A yellow bar on top allows you to start a pull request. An open pull request triggers a build on Netlify that generates a preview.

The changes are online after merging into master. Master is automatically built and deployed.


## Frontend components
Frontend components can be inserted as needed in the markdown files that make up the pages of the website. You cannot add components in the Front Matter. The Front Matter defines page specific meta content. We use it for the meta title and description of the page and for defining open graph images. The Front Matter area is indicated by 3 opening and 3 closing hyphens ( `---` ).

### The basics
The start and end of a component are wrapped with double curly braces and either `< ... >` or `% ... %`. Whenever you want your content within the component to be interpreted as markdown, use the `%` delimiter. Within the delimiter, you define the name of the component. The name is followed by optional parameters - some components have parameters and others don't. It's best to check some examples.

Let's have a look at the button component. It is added to your content by writing `{{< button >}}`. That already creates an empty button. To insert a label and a link, add the 2 parameters after the component name as follows: `{{< button "Button label" "https://www.skribble.com" >}}`. You can optionally add the 3rd parameter to navigate the user to a new tab after clicking the button:
```
{{< button "Button label" "https://www.skribble.com" "_blank" >}}
```
This adds the HTML parameter `target="_blank"` to the generated HTML.

Other components can contain more complex content. These components wrap their content, so they have a closing tag that indicates the end of the component. A good example is the `content` component that the Skribble website uses to style markdown in a certain way when adding it to layout components. We'll cover layout components next, don't worry.
```
{{% content %}}
# Signatures can be purchased individually or at a flat rate.
Skribbles' pricing adapts to your needs and can be flexibly configured.
{{% /content %}}
```
See how we used the `%` delimiter here? It interprets the content of the `content` component as markdown. The closing tag of our `content` component has a leading `/` before the name to indicate the end of the component.

### Layout components
Skribble Cove uses layout components to structure or layout a web page. There are 2 main layout components: `side-by-side` and `column`. Both of these 2 layout components span the entire width of the browser.

#### {{< side-by-side >}}
This component is a basic building block for Cove. It aligns a picture and a content component next to each other.
```
{{< side-by-side >}}
{{< picture image3 400 >}}
{{% content %}}
...
{{% /content %}}
{{< /side-by-side >}}
```

#### {{< center-block >}}
The other basic building block `center-block` aligns content from top to bottom while horizontally centering all elements within. It usually starts with a title and a leading text but its contents are completely free to choose. To further group components within the `center-block` you can use the `row` and the `column` component.

##### {{< row >}}
Draws its contents laterally outwards from the center. Its content is horizontally centered, vertically stretched, and never wrapped. Example content: `plan` component.

##### {{< column >}}
Draws its contents from top to bottom. Its content is horizontally centered. Example content: `collapsible` component.

### Markdown wrapper components
Note: consider using only one of the 2.

#### {{% richtext %}}
Applies styling for headings, paragraphs, links, and lists.

#### {{% content %}}
Applies styling for headings, paragraphs, links, and lists.

### Atomic components
Components that are rather simple and used in various places throughout the website.

#### {{< button >}}
The button accepts 3 parameters.
```
{{< button
  "Try it now"
  "https://www.skribble.com"
  "_blank"
>}}
```

**Parameters**
1. label
2. link
3. target attribute

#### {{< picture >}}
The picture component accepts 2 mandatory parameters. The first one is the first part of the image filename. The second parameter is the natural width of the image. Images have to named with following a specific scheme to be correctly referenced by the `picture` component. Let's have a look at the following example:
```
{{< picture image8 414 >}}
```
The `picture` component above looks for 4 images. 2 webp images in the regular (and displayed) resolution and the retina resolution. 2 jpg images (regular and retina) that are used as a fallback for browsers that don't support the webp format.
```
image8-414w.jpg
image8-828w.jpg
image8-414w.webp
image8-828w.wepb
```
The `-` and the `w` in the filename are added by the component. You have to add the part before the hyphen as the first parameter and the width between the hyphen and the `w` as the second parameter.

**Parameters**
1. part of filename before the hyphen
2. natural width of the image

### Custom components

#### {{< intro >}}
#### {{< intro-partner >}}

#### {{< plan >}}
The `plan` consists of the upper part with 2 titles and the lower part with any number of paragraphs. Paragraphs are divided by a horizontal line.

```
{{% plan gold "Prepaid Model" "Pay per signature" %}}
Suitable for single or occasional signing with QES
{{% /plan %}}
```

**Parameters**
1. color: `gold` or `purple`
2. first and smaller title
3. the second and larger title

#### {{< collapsible >}}
This collapsible component hides its content and reveals it after clicking on the title.
```
{{% collapsible 1 "Requirement of written form" %}}
A signature with Skribble is equal to the handwritten signature according to Swiss (OR Art. 14 Para. 2 bis) and EU law (eIDAS No. 910`/`2014 Art. 25 Para. 2).
{{% /collapsible %}}
```

**Parameters**
1. id
2. title of the collapsible

#### {{< outro >}}

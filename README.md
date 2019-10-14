# cove
Skribble **co**rporate **ve**bsite

## Status
Deploy:
[![Netlify Status](https://api.netlify.com/api/v1/badges/7d00ef7a-5c8b-4b90-912f-355470b7d23c/deploy-status)](https://app.netlify.com/sites/skribble/deploys)

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

If you are using windows, you will have to install [node-gyp's windows build tools](https://github.com/nodejs/node-gyp/blob/master/README.md#option-1)
```
# in a cmd or powershell terminal with administrator rights, run:
 yarn global add windows-build-tools
```

### Configure a remote for a fork
https://help.github.com/en/articles/configuring-a-remote-for-a-fork

- open the Terminal
- list the remote for your fork
```
$ git remote -v
```
- specify a new remote `upstream`
```
$ git remote add upstream https://github.com/ORIGINAL_OWNER/ORIGINAL_REPOSITORY.git
```
- verify the new `upstream`
```
$ git remote -v
```

### Syncing the fork
from https://help.github.com/en/articles/syncing-a-fork

- open the Terminal
- change to your local project
- fetch the branches from upstream
```
$ git fetch upstream
```
- check out your fork's local `master` branch
```
$ git checkout master
```
- merge changes from `usptream/master` into `master`
```
$ git merge upstream/master
```


### Development
Use `yarn start` to develop locally.

Use `yarn build` to build locally.

### Using GitHub Desktop
Download the GitHub desktop app to easily track changes in the repository: https://desktop.github.com/. Before working on the content files, make sure to checkout the current version of master. Follow the steps below:

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

Other components can contain more complex content. These components wrap their content, so they have a closing tag that indicates the end of the component. A good example is the `heading` component that arranges a title and a lead text. We'll cover layout components next, don't worry.
```
{{% heading %}}
# Signatures can be purchased individually or at a flat rate.
Skribbles' pricing adapts to your needs and can be flexibly configured.
{{% /heading %}}
```
See how we used the `%` delimiter here? It interprets the content of the `content` component as markdown. The closing tag of our `heading` component has a leading `/` before the name to indicate the end of the component.

### Menu component
The main, header and footer menus are defined in the file `site/config.yaml`. 

The top level structure of the file is divided by language.
```
baseurl: /
title: Skribble
languages:
  de:...
  en:...
  fr:...
```

Inside each language you can define the content of your menus - currently `main`, `header` and `footer`.

If you want to create submenus (or dropdown menus):
  - In the parent item define an attribute `identifier`
  - In the children item define an attribute `parent` with the same value

```
en:
    languageName: English
    flagCode: GB
    weight: 1
    contentDir: content/english
    menu:
      main:

        # Platform dropdown parent
        - name: Platform
          url: "#"
          weight: 10
          identifier: platform
      
        # Platform dropdown children
        - name: Features
          url: "/features/"
          weight: 10
          parent: platform
        - name: Integration
          url: "/integration/"
          weight: 15
          parent: platform
    ...
```

### Layout components
Skribble Cove uses layout components to structure or layout a web page. There are 2 main layout components: `side-by-side` and `content`.

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

#### {{< content >}}
The other basic building block `content` building direction is top to down. It usually starts with a heading component its contents are completely free to choose. To horizontally group components within the `content` you can use the `row` component.

##### {{< row >}}
Draws its contents laterally outwards from the center. Its content is horizontally centered, vertically stretched, and never wrapped. Example content: `plan` component.

### Markdown wrapper components

#### {{% richtext %}}
Applies styling for headings, paragraphs, links, and lists (ul, ol, dl).

### Atomic components
Components that are rather simple and used in various places throughout the website.

#### {{< button >}}
The button accepts 4 parameters.
```
{{< button
  "Try it now"
  "https://www.skribble.com"
  "_blank"
  "outline"
>}}
```

**Parameters**
1. label
2. link
3. target attribute (optional): `_blank_`
4. style (optional): `outline`

#### {{< ol >}}
Use the strong tag to indicate the title of an ordered list item that has a title and a text.
```
1. **Wähle den Dokument-Typ:**
Der eigenhändigen Unterschrift gleichgestellte qualifizierte elektronische Signatur
2. **Lade dein Dokument hoch**
3. **Klicke auf Prüfen**
```

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
- `name` The filename before suffix (the suffix being a hyphen, the width, and a w)
- `w` Natural width of the image
- `alt` Adds an alt text to the image
- `href` Adds a link around the image
- `target` Sets the target attribute

### Custom components

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

#### {{< cta >}}
A little component with dividers at the top and bottom that is used to focus the attention on a single call to action.

**Parameters**
- `label` Adds a label to the button
- `href` Defines the link href
- `target` Sets the target attribute
- `outlined="true"` Applies the outline style to the button
- `title` Adds a title above the border
- `floating="true"` Removes the borders around the cta

#### {{< features-container >}} and {{< features-item >}}
The features component allows you to present a responsive grid of images with a headline and description. It is composed of two shortcodes to be used nested, as in the following example:

```
{{< features-container >}}
  {{< features-item src="features/window-dev.svg" headline="Moderne Schnittstelle mit detaillierter Dokumentation" description="Die moderne JSON REST-API ist einfach und schnell integriert. Unsere API-Dokumentation liefert dir alle Details, die du Brauchst.">}}
  {{< features-item src="features/note-code.svg" headline="API-Testing mit Demo-Account" description="Mit unserem Demo-Account testest du die API unverbindlich und kostenlos.">}}
  {{< features-item src="features/hybrid-car.svg" headline="Plugin für DMS und Branchenlösungen" description="Integriere Skribble als Plugin in Dokumenten-Management-Systeme wie OneDrive und SharePoint, oder in Branchen-Lösungen wie Abacus un SAP.">}}
  {{< features-item src="features/webpage.svg" headline="Optimiertes Webinterface für die Nutzung via Browser" description="Skribbles optimierte Benutzeroberfläche liefert dir ein intuitives Benutzererlebnis für alle modernen Browser und Geräte.">}}
{{< /features-container >}}
```

#### {{< heading >}}
The heading component is used to arrange a title and a lead text. It centers its content by default. You can left align the content by passing the `left` paramter.

**Parameters**
1. left (optional)

#### {{< intro >}}
#### {{< intro-partner >}}

#### {{< logos-container >}} and {{< logos-item >}}
The logos component allows you to present responsive rows of logos or pictures. It is composed of two shortcodes to be used nested, as in the following example:
```
{{< logos-container title="Skribble in the press">}}
  {{< logos-item src="logos/app-advice-vector-svg-logo.svg" link="http://google.com" alt="Company logo">}}
  {{< logos-item src="logos/forbes-vector-svg-logo-image.svg" link="http://google.com" alt="Company logo">}}
  {{< logos-item src="logos/khoi-vihn-subtraction-vector-svg-logo.svg" link="http://google.com" alt="Company logo">}}
  {{< logos-item src="logos/webdesigner-depot-vector-svg-logo.svg" alt="Company logo">}}
{{< /logos-container >}}
```
**Parameters**

- src: the path to the image to be used
- link: (optional) a link to be opened in a new tab. If there is no link defined, the logo will not be clickable
- alt: (optional) alternate text for the image, if the image cannot be displayed

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
4. button label (optional)
5. button href (optional)
6. button target attribute (optional)
7. button style (optional): `outline`

#### {{< collapsible >}}
This collapsible component hides its content and reveals it after clicking on the title.
```
{{% collapsible 1 "Requirement of written form" "" %}}
A signature with Skribble is equal to the handwritten signature according to Swiss (OR Art. 14 Para. 2 bis) and EU law (eIDAS No. 910`/`2014 Art. 25 Para. 2).
{{% /collapsible %}}
```

**Parameters**
1. id
2. title of the collapsible
3. icon: `check` (optional)

#### {{< outro >}}

#### {{< testimonial >}}
To provide a little bit of structure, we add the testimonial images in a folder testimonial.

```
{{< testimonial "testimonial/foresight.png" "e-foresight Think Tank" >}}
"Skribble bietet eine kundenfreundliche Lösung zur Qualifizierten Elektronischen Signatur in der Schweiz an."
{{< /testimonial >}}
```

**Parameters**
1. image
2. footer

## Outlines
To show component outlines and component labels, add the following styling to `main.scss`.

```scss
@mixin outline($name: default, $color: black, $orientation: 45deg) {
  outline: 1px solid $color !important;
  background: repeating-linear-gradient($orientation, rgba($color, .1),rgba($color, .1) 10px,rgba($color, .05) 10px,rgba($color, .05) 20px);
  position: relative;
  &:after {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 10;
    font: 10px/1 monospace;
    background: $color;
    color: white;
    padding: 2px;
    content: '#{$name}';
  }
}
* {outline: 1px solid rgba(red, .1);}
.collapsible {@include outline(collapsible, darkgoldenrod, -45deg);}
.content {@include outline(content, black);}
.cta {@include outline(cta, seagreen);}
.heading {@include outline(heading, purple, -45deg);}
.intro {@include outline(intro, black);}
.outro {@include outline(outro, black);}
.picture {@include outline(picture, tomato, -45deg);}
.richtext {@include outline(richtext, mediumslateblue, -45deg);}
.row {@include outline(row, grey, -45deg);}
.side-by-side {@include outline(side-by-side, black);}
.table-wrapper {@include outline(table-wrapper, darkorchid);}
```

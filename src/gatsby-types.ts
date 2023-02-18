export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  /** The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID. */
  ID: string;
  /** The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text. */
  String: string;
  /** The `Boolean` scalar type represents `true` or `false`. */
  Boolean: boolean;
  /** The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1. */
  Int: number;
  /** The `Float` scalar type represents signed double-precision fractional values as specified by [IEEE 754](https://en.wikipedia.org/wiki/IEEE_floating_point). */
  Float: number;
  /** A date string, such as 2007-12-03, compliant with the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  Date: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  GatsbyImageData: any;
  /** Text content with rich formatting capabilities using a Prismic format called Structured Text. */
  PrismicStructuredText: any;
};

export type File = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  /** Returns all children nodes filtered by type ImageSharp */
  childrenImageSharp?: Maybe<Array<Maybe<ImageSharp>>>;
  /** Returns the first child node of type ImageSharp or null if there are no children of given type on this node */
  childImageSharp?: Maybe<ImageSharp>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type FileModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type FileCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

/** Node Interface */
export type Node = {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type Internal = {
  content?: Maybe<Scalars['String']>;
  contentDigest: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
  ignoreType?: Maybe<Scalars['Boolean']>;
  mediaType?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
  type: Scalars['String'];
  contentFilePath?: Maybe<Scalars['String']>;
};

export type Directory = Node & {
  sourceInstanceName: Scalars['String'];
  absolutePath: Scalars['String'];
  relativePath: Scalars['String'];
  extension: Scalars['String'];
  size: Scalars['Int'];
  prettySize: Scalars['String'];
  modifiedTime: Scalars['Date'];
  accessTime: Scalars['Date'];
  changeTime: Scalars['Date'];
  birthTime: Scalars['Date'];
  root: Scalars['String'];
  dir: Scalars['String'];
  base: Scalars['String'];
  ext: Scalars['String'];
  name: Scalars['String'];
  relativeDirectory: Scalars['String'];
  dev: Scalars['Int'];
  mode: Scalars['Int'];
  nlink: Scalars['Int'];
  uid: Scalars['Int'];
  gid: Scalars['Int'];
  rdev: Scalars['Int'];
  ino: Scalars['Float'];
  atimeMs: Scalars['Float'];
  mtimeMs: Scalars['Float'];
  ctimeMs: Scalars['Float'];
  atime: Scalars['Date'];
  mtime: Scalars['Date'];
  ctime: Scalars['Date'];
  /** @deprecated Use `birthTime` instead */
  birthtime?: Maybe<Scalars['Date']>;
  /** @deprecated Use `birthTime` instead */
  birthtimeMs?: Maybe<Scalars['Float']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type Site = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  siteMetadata?: Maybe<SiteSiteMetadata>;
  port?: Maybe<Scalars['Int']>;
  host?: Maybe<Scalars['String']>;
  graphqlTypegen?: Maybe<SiteGraphqlTypegen>;
  polyfill?: Maybe<Scalars['Boolean']>;
  pathPrefix?: Maybe<Scalars['String']>;
  jsxRuntime?: Maybe<Scalars['String']>;
  trailingSlash?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type SiteGraphqlTypegen = {
  typesOutputPath?: Maybe<Scalars['String']>;
  documentSearchPaths?: Maybe<Array<Maybe<Scalars['String']>>>;
  generateOnBuild?: Maybe<Scalars['Boolean']>;
};

export type SiteSiteMetadata = {
  title?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  siteUrl?: Maybe<Scalars['String']>;
};

export type SiteFunction = Node & {
  functionRoute: Scalars['String'];
  pluginName: Scalars['String'];
  originalAbsoluteFilePath: Scalars['String'];
  originalRelativeFilePath: Scalars['String'];
  relativeCompiledFilePath: Scalars['String'];
  absoluteCompiledFilePath: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePage = Node & {
  path: Scalars['String'];
  component: Scalars['String'];
  internalComponentName: Scalars['String'];
  componentChunkName: Scalars['String'];
  matchPath?: Maybe<Scalars['String']>;
  pageContext?: Maybe<Scalars['JSON']>;
  pluginCreator?: Maybe<SitePlugin>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SitePlugin = Node & {
  resolve?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  version?: Maybe<Scalars['String']>;
  nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
  pluginFilepath?: Maybe<Scalars['String']>;
  pluginOptions?: Maybe<Scalars['JSON']>;
  packageJson?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadata = Node & {
  buildTime?: Maybe<Scalars['Date']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type SiteBuildMetadataBuildTimeArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type ThemeUiConfig = Node & {
  preset?: Maybe<Scalars['JSON']>;
  prismPreset?: Maybe<Scalars['JSON']>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type GatsbyImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF';

export type GatsbyImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED';

export type GatsbyImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE';

export type ImageFormat = 'NO_CHANGE' | 'AUTO' | 'JPG' | 'PNG' | 'WEBP' | 'AVIF';

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE';

export type ImageLayout = 'FIXED' | 'FULL_WIDTH' | 'CONSTRAINED';

export type ImageCropFocus =
  | 'CENTER'
  | 'NORTH'
  | 'NORTHEAST'
  | 'EAST'
  | 'SOUTHEAST'
  | 'SOUTH'
  | 'SOUTHWEST'
  | 'WEST'
  | 'NORTHWEST'
  | 'ENTROPY'
  | 'ATTENTION';

export type DuotoneGradient = {
  highlight: Scalars['String'];
  shadow: Scalars['String'];
  opacity?: InputMaybe<Scalars['Int']>;
};

export type PotraceTurnPolicy =
  | 'TURNPOLICY_BLACK'
  | 'TURNPOLICY_WHITE'
  | 'TURNPOLICY_LEFT'
  | 'TURNPOLICY_RIGHT'
  | 'TURNPOLICY_MINORITY'
  | 'TURNPOLICY_MAJORITY';

export type Potrace = {
  turnPolicy?: InputMaybe<PotraceTurnPolicy>;
  turdSize?: InputMaybe<Scalars['Float']>;
  alphaMax?: InputMaybe<Scalars['Float']>;
  optCurve?: InputMaybe<Scalars['Boolean']>;
  optTolerance?: InputMaybe<Scalars['Float']>;
  threshold?: InputMaybe<Scalars['Int']>;
  blackOnWhite?: InputMaybe<Scalars['Boolean']>;
  color?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
};

export type ImageSharp = Node & {
  fixed?: Maybe<ImageSharpFixed>;
  fluid?: Maybe<ImageSharpFluid>;
  gatsbyImageData: Scalars['GatsbyImageData'];
  original?: Maybe<ImageSharpOriginal>;
  resize?: Maybe<ImageSharpResize>;
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImageSharpFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  base64Width?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  duotone?: InputMaybe<DuotoneGradient>;
  traceSVG?: InputMaybe<Potrace>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  toFormat?: InputMaybe<ImageFormat>;
  toFormatBase64?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  sizes?: InputMaybe<Scalars['String']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type ImageSharpGatsbyImageDataArgs = {
  layout?: InputMaybe<ImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  placeholder?: InputMaybe<ImagePlaceholder>;
  blurredOptions?: InputMaybe<BlurredOptions>;
  tracedSVGOptions?: InputMaybe<Potrace>;
  formats?: InputMaybe<Array<InputMaybe<ImageFormat>>>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpgOptions?: InputMaybe<JpgOptions>;
  pngOptions?: InputMaybe<PngOptions>;
  webpOptions?: InputMaybe<WebPOptions>;
  avifOptions?: InputMaybe<AvifOptions>;
  transformOptions?: InputMaybe<TransformOptions>;
  backgroundColor?: InputMaybe<Scalars['String']>;
};

export type ImageSharpResizeArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  jpegQuality?: InputMaybe<Scalars['Int']>;
  pngQuality?: InputMaybe<Scalars['Int']>;
  webpQuality?: InputMaybe<Scalars['Int']>;
  jpegProgressive?: InputMaybe<Scalars['Boolean']>;
  pngCompressionLevel?: InputMaybe<Scalars['Int']>;
  pngCompressionSpeed?: InputMaybe<Scalars['Int']>;
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  base64?: InputMaybe<Scalars['Boolean']>;
  traceSVG?: InputMaybe<Potrace>;
  toFormat?: InputMaybe<ImageFormat>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
  background?: InputMaybe<Scalars['String']>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
};

export type ImageSharpFixed = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  width: Scalars['Float'];
  height: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFluid = {
  base64?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  aspectRatio: Scalars['Float'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp?: Maybe<Scalars['String']>;
  srcSetWebp?: Maybe<Scalars['String']>;
  sizes: Scalars['String'];
  originalImg?: Maybe<Scalars['String']>;
  originalName?: Maybe<Scalars['String']>;
  presentationWidth: Scalars['Int'];
  presentationHeight: Scalars['Int'];
};

export type ImagePlaceholder = 'DOMINANT_COLOR' | 'TRACED_SVG' | 'BLURRED' | 'NONE';

export type BlurredOptions = {
  /** Width of the generated low-res preview. Default is 20px */
  width?: InputMaybe<Scalars['Int']>;
  /** Force the output format for the low-res preview. Default is to use the same format as the input. You should rarely need to change this */
  toFormat?: InputMaybe<ImageFormat>;
};

export type JpgOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  progressive?: InputMaybe<Scalars['Boolean']>;
};

export type PngOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  compressionSpeed?: InputMaybe<Scalars['Int']>;
};

export type WebPOptions = {
  quality?: InputMaybe<Scalars['Int']>;
};

export type AvifOptions = {
  quality?: InputMaybe<Scalars['Int']>;
  lossless?: InputMaybe<Scalars['Boolean']>;
  speed?: InputMaybe<Scalars['Int']>;
};

export type TransformOptions = {
  grayscale?: InputMaybe<Scalars['Boolean']>;
  duotone?: InputMaybe<DuotoneGradient>;
  rotate?: InputMaybe<Scalars['Int']>;
  trim?: InputMaybe<Scalars['Float']>;
  cropFocus?: InputMaybe<ImageCropFocus>;
  fit?: InputMaybe<ImageFit>;
};

export type ImageSharpOriginal = {
  width?: Maybe<Scalars['Float']>;
  height?: Maybe<Scalars['Float']>;
  src?: Maybe<Scalars['String']>;
};

export type ImageSharpResize = {
  src?: Maybe<Scalars['String']>;
  tracedSVG?: Maybe<Scalars['String']>;
  width?: Maybe<Scalars['Int']>;
  height?: Maybe<Scalars['Int']>;
  aspectRatio?: Maybe<Scalars['Float']>;
  originalName?: Maybe<Scalars['String']>;
};

export type PrismicAlternateLanguageType = {
  id?: Maybe<Scalars['ID']>;
  uid?: Maybe<Scalars['String']>;
  lang?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['String']>;
  document?: Maybe<PrismicAllDocumentTypes>;
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicEmbedType = Node & {
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicGeoPointType = {
  longitude: Scalars['Float'];
  latitude: Scalars['Float'];
};

export type PrismicImageDimensionsType = {
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type PrismicImageThumbnailType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
};

export type PrismicImageThumbnailTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicImageThumbnailTypeGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
};

export type PrismicLinkType = {
  link_type?: Maybe<PrismicLinkTypeEnum>;
  isBroken?: Maybe<Scalars['Boolean']>;
  url?: Maybe<Scalars['String']>;
  target?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['ID']>;
  type?: Maybe<Scalars['String']>;
  tags?: Maybe<Array<Maybe<Scalars['String']>>>;
  lang?: Maybe<Scalars['String']>;
  slug?: Maybe<Scalars['String']>;
  uid?: Maybe<Scalars['String']>;
  document?: Maybe<PrismicAllDocumentTypes>;
  localFile?: Maybe<File>;
  raw?: Maybe<Scalars['JSON']>;
};

export type PrismicLinkTypeEnum = 'Any' | 'Document' | 'Media' | 'Web';

export type PrismicSliceType = {
  id: Scalars['ID'];
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
};

export type PrismicSharedSliceType = {
  id: Scalars['ID'];
  slice_type: Scalars['String'];
  slice_label?: Maybe<Scalars['String']>;
  variation: Scalars['String'];
  version: Scalars['String'];
};

export type PrismicStructuredTextType = {
  text?: Maybe<Scalars['String']>;
  html?: Maybe<Scalars['String']>;
  richText: Scalars['PrismicStructuredText'];
  /** @deprecated This field has been renamed to `richText`. The `richText` field has the same value the `raw` field. */
  raw: Scalars['PrismicStructuredText'];
};

export type PrismicTypePathType = Node & {
  kind: Scalars['String'];
  path: Array<Scalars['String']>;
  type: Scalars['String'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type ImgixFixed = {
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  width: Scalars['Int'];
  height: Scalars['Int'];
};

export type ImgixFluid = {
  base64: Scalars['String'];
  src: Scalars['String'];
  srcSet: Scalars['String'];
  srcWebp: Scalars['String'];
  srcSetWebp: Scalars['String'];
  sizes: Scalars['String'];
  aspectRatio: Scalars['Float'];
};

export type ImgixPlaceholder = 'DOMINANT_COLOR' | 'BLURRED' | 'NONE';

export type ImgixParamsInput = {
  /** Specifies an aspect ratio to maintain when resizing and cropping the image. [See docs](https://docs.imgix.com/apis/url/size/ar). */
  ar?: InputMaybe<Scalars['String']>;
  /** Applies automatic enhancements to images. [See docs](https://docs.imgix.com/apis/url/auto). */
  auto?: InputMaybe<Scalars['String']>;
  /** Colors the background of padded and partially-transparent images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/bg). */
  bg?: InputMaybe<Scalars['String']>;
  /** Changes the blend alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/blending/blend-align). */
  blendAlign?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  blendalign?: InputMaybe<Scalars['String']>;
  /** Alias for `blendAlign`. */
  ba?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the blend image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/blending/blend-alpha). */
  blendAlpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  blendalpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendAlpha`. */
  balph?: InputMaybe<Scalars['Int']>;
  /** Specifies a color to use when applying the blend. [See docs](https://docs.imgix.com/apis/url/blending/blend-color). */
  blendColor?: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendClr?: InputMaybe<Scalars['String']>;
  /** Alias for `blendColor`. */
  blendclr?: InputMaybe<Scalars['String']>;
  /** Specifies the type of crop for blend images. [See docs](https://docs.imgix.com/apis/url/blending/blend-crop). */
  blendCrop?: InputMaybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  blendcrop?: InputMaybe<Scalars['String']>;
  /** Alias for `blendCrop`. */
  bc?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for blend images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/blending/blend-fit). */
  blendFit?: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  blendfit?: InputMaybe<Scalars['String']>;
  /** Alias for `blendFit`. */
  bf?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-h). */
  blendH?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendH`. */
  blendh?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendH`. */
  bh?: InputMaybe<Scalars['Float']>;
  /** Sets the blend mode for a blend image. Default: `overlay`. [See docs](https://docs.imgix.com/apis/url/blending/blend-mode). */
  blendMode?: InputMaybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  blendmode?: InputMaybe<Scalars['String']>;
  /** Alias for `blendMode`. */
  bm?: InputMaybe<Scalars['String']>;
  /** Applies padding to the blend image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-pad). */
  blendPad?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  blendpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendPad`. */
  bp?: InputMaybe<Scalars['Int']>;
  /** Adjusts the size of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-size). */
  blendSize?: InputMaybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  blendsize?: InputMaybe<Scalars['String']>;
  /** Alias for `blendSize`. */
  bs?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend-w). */
  blendW?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendW`. */
  blendw?: InputMaybe<Scalars['Float']>;
  /** Alias for `blendW`. */
  bw?: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-x). */
  blendX?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  blendx?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendX`. */
  bx?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the blend image relative to its parent. Default: `0`. [See docs](https://docs.imgix.com/apis/url/blending/blend-y). */
  blendY?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  blendy?: InputMaybe<Scalars['Int']>;
  /** Alias for `blendY`. */
  by?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the blend image. [See docs](https://docs.imgix.com/apis/url/blending/blend). */
  blend?: InputMaybe<Scalars['String']>;
  /** Alias for `blend`. */
  b?: InputMaybe<Scalars['String']>;
  /** Applies a gaussian blur to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/blur). */
  blur?: InputMaybe<Scalars['Int']>;
  /** Sets bottom border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-bottom). */
  borderBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-left). */
  borderLeft?: InputMaybe<Scalars['Int']>;
  /** Sets the inner radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius-inner). */
  borderRadiusInner?: InputMaybe<Scalars['String']>;
  /** Sets the outer radius of the image's border in pixels. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-radius). */
  borderRadius?: InputMaybe<Scalars['String']>;
  /** Sets right border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-right). */
  borderRight?: InputMaybe<Scalars['Int']>;
  /** Sets top border of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border-top). */
  borderTop?: InputMaybe<Scalars['Int']>;
  /** Applies a border to an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/border). */
  border?: InputMaybe<Scalars['String']>;
  /** Adjusts the brightness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/bri). */
  bri?: InputMaybe<Scalars['Int']>;
  /** Sets one or more Client-Hints headers. [See docs](https://docs.imgix.com/apis/url/format/ch). */
  ch?: InputMaybe<Scalars['String']>;
  /** Specifies the output chroma subsampling rate. Default: `420`. [See docs](https://docs.imgix.com/apis/url/format/chromasub). */
  chromasub?: InputMaybe<Scalars['Int']>;
  /** Limits the number of unique colors in an image. [See docs](https://docs.imgix.com/apis/url/format/colorquant). */
  colorquant?: InputMaybe<Scalars['Int']>;
  /** Specifies how many colors to include in a palette-extraction response. Default: `6`. [See docs](https://docs.imgix.com/apis/url/color-palette/colors). */
  colors?: InputMaybe<Scalars['Int']>;
  /** Adjusts the contrast of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/con). */
  con?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius value for a rounded corner mask. [See docs](https://docs.imgix.com/apis/url/mask/corner-radius). */
  cornerRadius?: InputMaybe<Scalars['String']>;
  /** Specifies how to crop an image. [See docs](https://docs.imgix.com/apis/url/size/crop). */
  crop?: InputMaybe<Scalars['String']>;
  /** Specifies the color space of the output image. [See docs](https://docs.imgix.com/apis/url/format/cs). */
  cs?: InputMaybe<Scalars['String']>;
  /** Forces a URL to use send-file in its response. [See docs](https://docs.imgix.com/apis/url/format/dl). */
  dl?: InputMaybe<Scalars['String']>;
  /** Sets the DPI value in the EXIF header. [See docs](https://docs.imgix.com/apis/url/format/dpi). */
  dpi?: InputMaybe<Scalars['Int']>;
  /** Adjusts the device-pixel ratio of the output image. Default: `1`. [See docs](https://docs.imgix.com/apis/url/dpr). */
  dpr?: InputMaybe<Scalars['Float']>;
  /** Changes the alpha of the duotone effect atop the source image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/stylize/duotone-alpha). */
  duotoneAlpha?: InputMaybe<Scalars['Int']>;
  /** Applies a duotone effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/duotone). */
  duotone?: InputMaybe<Scalars['String']>;
  /** Adjusts the exposure of the output image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/exp). */
  exp?: InputMaybe<Scalars['Int']>;
  /** A Unix timestamp specifying a UTC time. Requests made to this URL after that time will output a 404 status code. [See docs](https://docs.imgix.com/apis/url/expires). */
  expires?: InputMaybe<Scalars['String']>;
  /** Selects a face to crop to. [See docs](https://docs.imgix.com/apis/url/face-detection/faceindex). */
  faceindex?: InputMaybe<Scalars['Int']>;
  /** Adjusts padding around a selected face. Default: `1`. [See docs](https://docs.imgix.com/apis/url/face-detection/facepad). */
  facepad?: InputMaybe<Scalars['Float']>;
  /** Specifies that face data should be included in output when combined with `fm=json`. [See docs](https://docs.imgix.com/apis/url/face-detection/faces). */
  faces?: InputMaybe<Scalars['Int']>;
  /** Sets the fill color for images with additional space created by the fit setting. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/fill/fill-color). */
  fillColor?: InputMaybe<Scalars['String']>;
  /** Alias for `fillColor`. */
  fillcolor?: InputMaybe<Scalars['String']>;
  /** Determines how to fill in additional space created by the fit setting. [See docs](https://docs.imgix.com/apis/url/fill/fill). */
  fill?: InputMaybe<Scalars['String']>;
  /** Specifies how to map the source image to the output image dimensions. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/size/fit). */
  fit?: InputMaybe<Scalars['String']>;
  /** Alias for `fit`. */
  f?: InputMaybe<Scalars['String']>;
  /** Flips an image on a specified axis. [See docs](https://docs.imgix.com/apis/url/rotation/flip). */
  flip?: InputMaybe<Scalars['String']>;
  /** Changes the format of the output image. [See docs](https://docs.imgix.com/apis/url/format/fm). */
  fm?: InputMaybe<Scalars['String']>;
  /** Displays crosshairs identifying the location of the set focal point. Default: `false`. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-debug). */
  fpDebug?: InputMaybe<Scalars['Boolean']>;
  /** Sets the relative horizontal value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-x). */
  fpX?: InputMaybe<Scalars['Float']>;
  /** Sets the relative vertical value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-y). */
  fpY?: InputMaybe<Scalars['Float']>;
  /** Sets the relative zoom value for the focal point of an image. [See docs](https://docs.imgix.com/apis/url/focalpoint-crop/fp-z). */
  fpZ?: InputMaybe<Scalars['Float']>;
  /** Adjusts the gamma of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/gam). */
  gam?: InputMaybe<Scalars['Int']>;
  /** Sets grid colors for the transparency checkerboard grid. */
  gridColors?: InputMaybe<Scalars['String']>;
  /** Sets grid size for the transparency checkerboard grid. */
  gridSize?: InputMaybe<Scalars['Int']>;
  /** Adjusts the height of the output image. [See docs](https://docs.imgix.com/apis/url/size/h). */
  h?: InputMaybe<Scalars['Float']>;
  /** Alias for `h`. */
  height?: InputMaybe<Scalars['Float']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/high). */
  high?: InputMaybe<Scalars['Int']>;
  /** Applies a half-tone effect to the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/htn). */
  htn?: InputMaybe<Scalars['Int']>;
  /** Adjusts the hue of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/hue). */
  hue?: InputMaybe<Scalars['Int']>;
  /** Inverts the colors on the source image. Default: `false`. [See docs](https://docs.imgix.com/apis/url/adjustment/invert). */
  invert?: InputMaybe<Scalars['Boolean']>;
  /** Alias for `invert`. */
  inv?: InputMaybe<Scalars['Boolean']>;
  /** Determine if IPTC data should be passed for JPEG images. */
  iptc?: InputMaybe<Scalars['String']>;
  /** Specifies that the output image should be a lossless variant. Default: `false`. [See docs](https://docs.imgix.com/apis/url/format/lossless). */
  lossless?: InputMaybe<Scalars['Boolean']>;
  /** Changes the watermark alignment relative to the parent image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-align). */
  markAlign?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  ma?: InputMaybe<Scalars['String']>;
  /** Alias for `markAlign`. */
  markalign?: InputMaybe<Scalars['String']>;
  /** Changes the alpha of the watermark image. Default: `100`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-alpha). */
  markAlpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  markalpha?: InputMaybe<Scalars['Int']>;
  /** Alias for `markAlpha`. */
  malph?: InputMaybe<Scalars['Int']>;
  /** Changes base URL of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-base). */
  markBase?: InputMaybe<Scalars['String']>;
  /** Alias for `markBase`. */
  mb?: InputMaybe<Scalars['String']>;
  /** Alias for `markBase`. */
  markbase?: InputMaybe<Scalars['String']>;
  /** Specifies the fit mode for watermark images. Default: `clip`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-fit). */
  markFit?: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  mf?: InputMaybe<Scalars['String']>;
  /** Alias for `markFit`. */
  markfit?: InputMaybe<Scalars['String']>;
  /** Adjusts the height of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-h). */
  markH?: InputMaybe<Scalars['Float']>;
  /** Alias for `markH`. */
  mh?: InputMaybe<Scalars['Float']>;
  /** Alias for `markH`. */
  markh?: InputMaybe<Scalars['Float']>;
  /** Applies padding to the watermark image. Default: `5`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-pad). */
  markPad?: InputMaybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  mp?: InputMaybe<Scalars['Int']>;
  /** Alias for `markPad`. */
  markpad?: InputMaybe<Scalars['Int']>;
  /** Rotates a watermark or tiled watermarks by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/watermark/mark-rot). */
  markRot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the scale of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-scale). */
  markScale?: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  ms?: InputMaybe<Scalars['Int']>;
  /** Alias for `markScale`. */
  markscale?: InputMaybe<Scalars['Int']>;
  /** Adds tiled watermark. [See docs](https://docs.imgix.com/apis/url/watermark/mark-tile). */
  markTile?: InputMaybe<Scalars['String']>;
  /** Alias for `markTile`. */
  mtile?: InputMaybe<Scalars['String']>;
  /** Alias for `markTile`. */
  marktile?: InputMaybe<Scalars['String']>;
  /** Adjusts the width of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark-w). */
  markW?: InputMaybe<Scalars['Float']>;
  /** Alias for `markW`. */
  mw?: InputMaybe<Scalars['Float']>;
  /** Alias for `markW`. */
  markw?: InputMaybe<Scalars['Float']>;
  /** Adjusts the x-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-x). */
  markX?: InputMaybe<Scalars['Int']>;
  /** Alias for `markX`. */
  mx?: InputMaybe<Scalars['Int']>;
  /** Alias for `markX`. */
  markx?: InputMaybe<Scalars['Int']>;
  /** Adjusts the y-offset of the watermark image relative to its parent. [See docs](https://docs.imgix.com/apis/url/watermark/mark-y). */
  markY?: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  my?: InputMaybe<Scalars['Int']>;
  /** Alias for `markY`. */
  marky?: InputMaybe<Scalars['Int']>;
  /** Specifies the location of the watermark image. [See docs](https://docs.imgix.com/apis/url/watermark/mark). */
  mark?: InputMaybe<Scalars['String']>;
  /** Alias for `mark`. */
  m?: InputMaybe<Scalars['String']>;
  /** Colors the background of the transparent mask area of images. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/mask/mask-bg). */
  maskBg?: InputMaybe<Scalars['String']>;
  /** Alias for `maskBg`. */
  maskbg?: InputMaybe<Scalars['String']>;
  /** Defines the type of mask and specifies the URL if that type is selected. [See docs](https://docs.imgix.com/apis/url/mask). */
  mask?: InputMaybe<Scalars['String']>;
  /** Specifies the maximum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-height). */
  maxH?: InputMaybe<Scalars['Int']>;
  /** Alias for `maxH`. */
  maxHeight?: InputMaybe<Scalars['Int']>;
  /** Specifies the maximum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/max-width). */
  maxW?: InputMaybe<Scalars['Int']>;
  /** Alias for `maxW`. */
  maxWidth?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum height of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-height). */
  minH?: InputMaybe<Scalars['Int']>;
  /** Alias for `minH`. */
  minHeight?: InputMaybe<Scalars['Int']>;
  /** Specifies the minimum width of the output image in pixels. [See docs](https://docs.imgix.com/apis/url/size/min-width). */
  minW?: InputMaybe<Scalars['Int']>;
  /** Alias for `minW`. */
  minWidth?: InputMaybe<Scalars['Int']>;
  /** Applies a monochrome effect to the source image. [See docs](https://docs.imgix.com/apis/url/stylize/monochrome). */
  monochrome?: InputMaybe<Scalars['String']>;
  /** Alias for `monochrome`. */
  mono?: InputMaybe<Scalars['String']>;
  /** Reduces the noise in an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nr). */
  nr?: InputMaybe<Scalars['Int']>;
  /** Provides a threshold by which to sharpen an image. Default: `20`. [See docs](https://docs.imgix.com/apis/url/noise-reduction/nrs). */
  nrs?: InputMaybe<Scalars['Int']>;
  /** Changes the image orientation. [See docs](https://docs.imgix.com/apis/url/rotation/orient). */
  orient?: InputMaybe<Scalars['Int']>;
  /** Alias for `orient`. */
  or?: InputMaybe<Scalars['Int']>;
  /** Sets bottom padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-bottom). */
  padBottom?: InputMaybe<Scalars['Int']>;
  /** Sets left padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-left). */
  padLeft?: InputMaybe<Scalars['Int']>;
  /** Sets right padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-right). */
  padRight?: InputMaybe<Scalars['Int']>;
  /** Sets top padding of an image. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad-top). */
  padTop?: InputMaybe<Scalars['Int']>;
  /** Pads an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/border-and-padding/pad). */
  pad?: InputMaybe<Scalars['Int']>;
  /** Selects a page from a PDF for display. Default: `1`. [See docs](https://docs.imgix.com/apis/url/pdf/page). */
  page?: InputMaybe<Scalars['Int']>;
  /** Specifies an output format for palette-extraction. [See docs](https://docs.imgix.com/apis/url/color-palette/palette). */
  palette?: InputMaybe<Scalars['String']>;
  /** Enables or disables PDF annotation. Default: `true`. [See docs](https://docs.imgix.com/apis/url/pdf/pdf-annotation). */
  pdfAnnotation?: InputMaybe<Scalars['Boolean']>;
  /** Alias for `pdfAnnotation`. */
  annotation?: InputMaybe<Scalars['Boolean']>;
  /** Specifies a CSS prefix for all classes in palette-extraction. Default: `image`. [See docs](https://docs.imgix.com/apis/url/color-palette/prefix). */
  prefix?: InputMaybe<Scalars['String']>;
  /** Applies a pixelation effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/px). */
  px?: InputMaybe<Scalars['Int']>;
  /** Adjusts the quality of an output image. Default: `75`. [See docs](https://docs.imgix.com/apis/url/format/q). */
  q?: InputMaybe<Scalars['Int']>;
  /** Crops an image to a specified rectangle. [See docs](https://docs.imgix.com/apis/url/size/rect). */
  rect?: InputMaybe<Scalars['String']>;
  /** Rotates an image by a specified number of degrees. Default: `0`. [See docs](https://docs.imgix.com/apis/url/rotation/rot). */
  rot?: InputMaybe<Scalars['Float']>;
  /** Adjusts the saturation of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sat). */
  sat?: InputMaybe<Scalars['Int']>;
  /** Applies a sepia effect to an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/stylize/sepia). */
  sepia?: InputMaybe<Scalars['Int']>;
  /** Adjusts the highlights of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/shad). */
  shad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the sharpness of the source image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/sharp). */
  sharp?: InputMaybe<Scalars['Float']>;
  /** Adds checkerboard behind images which support transparency. [See docs](https://docs.imgix.com/apis/url/fill/transparency). */
  transparency?: InputMaybe<Scalars['String']>;
  /** Specifies a trim color on a trim operation. [See docs](https://docs.imgix.com/apis/url/trim/trim-color). */
  trimColor?: InputMaybe<Scalars['String']>;
  /** Alias for `trimColor`. */
  trimcolor?: InputMaybe<Scalars['String']>;
  /** Specifies the mean difference on a trim operation. Default: `11`. [See docs](https://docs.imgix.com/apis/url/trim/trim-md). */
  trimMd?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimMd`. */
  trimmd?: InputMaybe<Scalars['Float']>;
  /** Pads the area of the source image before trimming. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-pad). */
  trimPad?: InputMaybe<Scalars['Int']>;
  /** Alias for `trimPad`. */
  trimpad?: InputMaybe<Scalars['Int']>;
  /** Specifies the standard deviation on a trim operation. Default: `10`. [See docs](https://docs.imgix.com/apis/url/trim/trim-sd). */
  trimSd?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimSd`. */
  trimsd?: InputMaybe<Scalars['Float']>;
  /** Specifies the tolerance on a trim operation. Default: `0`. [See docs](https://docs.imgix.com/apis/url/trim/trim-tol). */
  trimTol?: InputMaybe<Scalars['Float']>;
  /** Alias for `trimTol`. */
  trimtol?: InputMaybe<Scalars['Float']>;
  /** Trims the source image. [See docs](https://docs.imgix.com/apis/url/trim/trim). */
  trim?: InputMaybe<Scalars['String']>;
  /** Sets the vertical and horizontal alignment of rendered text relative to the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-align). */
  txtAlign?: InputMaybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  txtalign?: InputMaybe<Scalars['String']>;
  /** Alias for `txtAlign`. */
  ta?: InputMaybe<Scalars['String']>;
  /** Sets the clipping properties of rendered text. Default: `end`. [See docs](https://docs.imgix.com/apis/url/text/txt-clip). */
  txtClip?: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  txtclip?: InputMaybe<Scalars['String']>;
  /** Alias for `txtClip`. */
  tcl?: InputMaybe<Scalars['String']>;
  /** Specifies the color of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-color). */
  txtColor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtcolor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtClr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  txtclr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtColor`. */
  tc?: InputMaybe<Scalars['String']>;
  /** Specifies the fit approach for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-fit). */
  txtFit?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFit`. */
  txtfit?: InputMaybe<Scalars['String']>;
  /** Selects a font for rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-font). */
  txtFont?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  tf?: InputMaybe<Scalars['String']>;
  /** Alias for `txtFont`. */
  txtfont?: InputMaybe<Scalars['String']>;
  /** Sets the leading (line spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-lead). */
  txtLead?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLead`. */
  txtlead?: InputMaybe<Scalars['Int']>;
  /** Controls the level of ligature substitution. [See docs](https://docs.imgix.com/apis/url/text/txt-lig). */
  txtLig?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLig`. */
  txtlig?: InputMaybe<Scalars['Int']>;
  /** Specifies a text outline color. Default: `fff`. [See docs](https://docs.imgix.com/apis/url/text/txt-line-color). */
  txtLineColor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlinecolor?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtLineClr?: InputMaybe<Scalars['String']>;
  /** Alias for `txtLineColor`. */
  txtlineclr?: InputMaybe<Scalars['String']>;
  /** Outlines the rendered text with a specified color. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-line). */
  txtLine?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  txtline?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtLine`. */
  tl?: InputMaybe<Scalars['Int']>;
  /** Specifies the padding (in device-independent pixels) between a textbox and the edges of the base image. [See docs](https://docs.imgix.com/apis/url/text/txt-pad). */
  txtPad?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  txtpad?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtPad`. */
  tp?: InputMaybe<Scalars['Int']>;
  /** Applies a shadow to rendered text. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-shad). */
  txtShad?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  txtshad?: InputMaybe<Scalars['Float']>;
  /** Alias for `txtShad`. */
  tsh?: InputMaybe<Scalars['Float']>;
  /** Sets the font size of rendered text. Default: `12`. [See docs](https://docs.imgix.com/apis/url/text/txt-size). */
  txtSize?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  tsz?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtSize`. */
  txtsize?: InputMaybe<Scalars['Int']>;
  /** Sets the tracking (letter spacing) for rendered text. Only works on the multi-line text endpoint. Default: `0`. [See docs](https://docs.imgix.com/apis/url/typesetting/txt-track). */
  txtTrack?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  txttrack?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtTrack`. */
  tt?: InputMaybe<Scalars['Int']>;
  /** Sets the width of rendered text. [See docs](https://docs.imgix.com/apis/url/text/txt-width). */
  txtWidth?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtWidth`. */
  txtwidth?: InputMaybe<Scalars['Int']>;
  /** Sets the horizontal (x) position of the text in pixels relative to the left edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-x). */
  txtX?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtX`. */
  txtx?: InputMaybe<Scalars['Int']>;
  /** Sets the vertical (y) position of the text in pixels relative to the top edge of the base image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/text/txt-y). */
  txtY?: InputMaybe<Scalars['Int']>;
  /** Alias for `txtY`. */
  txty?: InputMaybe<Scalars['Int']>;
  /** Sets the text string to render. [See docs](https://docs.imgix.com/apis/url/text/txt). */
  txt?: InputMaybe<Scalars['String']>;
  /** Alias for `txt`. */
  t?: InputMaybe<Scalars['String']>;
  /** Sharpens the source image using an unsharp mask. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/usm). */
  usm?: InputMaybe<Scalars['Int']>;
  /** Specifies the radius for an unsharp mask operation. Default: `2.5`. [See docs](https://docs.imgix.com/apis/url/adjustment/usmrad). */
  usmrad?: InputMaybe<Scalars['Float']>;
  /** Adjusts the vibrance of an image. Default: `0`. [See docs](https://docs.imgix.com/apis/url/adjustment/vib). */
  vib?: InputMaybe<Scalars['Int']>;
  /** Adjusts the width of the output image. [See docs](https://docs.imgix.com/apis/url/size/w). */
  w?: InputMaybe<Scalars['Float']>;
  /** Alias for `w`. */
  width?: InputMaybe<Scalars['Float']>;
};

export type PrismicTripsDataType = {
  page_title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicTrips = Node & {
  data: PrismicTripsDataType;
  dataRaw: Scalars['JSON'];
  prismicId: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicTripsFirst_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicTripsLast_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicHomeDataType = {
  baseline?: Maybe<PrismicStructuredTextType>;
  page_description?: Maybe<PrismicStructuredTextType>;
  page_title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicHeaderDataNavLinks = {
  label?: Maybe<PrismicStructuredTextType>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicHome = Node & {
  data: PrismicHomeDataType;
  dataRaw: Scalars['JSON'];
  prismicId: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicHomeFirst_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicHomeLast_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicHeaderDataType = {
  nav_links?: Maybe<Array<Maybe<PrismicHeaderDataNavLinks>>>;
  title?: Maybe<PrismicStructuredTextType>;
};

export type PrismicResumeDataAvatarImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
};

export type PrismicResumeDataAvatarImageTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicResumeDataAvatarImageTypeFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicResumeDataAvatarImageTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicResumeDataAvatarImageTypeGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
};

export type PrismicHeader = Node & {
  data: PrismicHeaderDataType;
  dataRaw: Scalars['JSON'];
  prismicId: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicHeaderFirst_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicHeaderLast_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicResumeDataSocialLinksIconImageType = {
  alt?: Maybe<Scalars['String']>;
  copyright?: Maybe<Scalars['String']>;
  dimensions?: Maybe<PrismicImageDimensionsType>;
  /** A plain imgix URL with the URL and params applied. */
  url?: Maybe<Scalars['String']>;
  /** Should be used to generate fixed-width images (i.e. the size of the image doesn't change when the size of the browser changes, and are "fixed"). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFixed fragment should be used. See the project's README for more information. */
  fixed?: Maybe<ImgixFixed>;
  /** Should be used to generate fluid-width images (i.e. images that change when the size of the browser changes). Returns data compatible with gatsby-image. Instead of accessing this data directly, the GatsbySourceImgixFluid fragment should be used. See the project's README for more information. */
  fluid?: Maybe<ImgixFluid>;
  gatsbyImageData?: Maybe<Scalars['JSON']>;
  localFile?: Maybe<File>;
};

export type PrismicResumeDataSocialLinksIconImageTypeUrlArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicResumeDataSocialLinksIconImageTypeFixedArgs = {
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  quality?: InputMaybe<Scalars['Int']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicResumeDataSocialLinksIconImageTypeFluidArgs = {
  imgixParams?: InputMaybe<ImgixParamsInput>;
  maxWidth?: InputMaybe<Scalars['Int']>;
  maxHeight?: InputMaybe<Scalars['Int']>;
  srcSetBreakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
};

export type PrismicResumeDataSocialLinksIconImageTypeGatsbyImageDataArgs = {
  layout?: InputMaybe<GatsbyImageLayout>;
  width?: InputMaybe<Scalars['Int']>;
  height?: InputMaybe<Scalars['Int']>;
  aspectRatio?: InputMaybe<Scalars['Float']>;
  outputPixelDensities?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  breakpoints?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  sizes?: InputMaybe<Scalars['String']>;
  backgroundColor?: InputMaybe<Scalars['String']>;
  imgixParams?: InputMaybe<ImgixParamsInput>;
  placeholderImgixParams?: InputMaybe<ImgixParamsInput>;
  placeholder?: InputMaybe<ImgixPlaceholder>;
  widthTolerance?: InputMaybe<Scalars['Float']>;
  srcSetMinWidth?: InputMaybe<Scalars['Int']>;
  srcSetMaxWidth?: InputMaybe<Scalars['Int']>;
};

export type PrismicResumeDataSocialLinks = {
  icon?: Maybe<PrismicResumeDataSocialLinksIconImageType>;
  link?: Maybe<PrismicLinkType>;
};

export type PrismicResumeDataType = {
  abstract?: Maybe<PrismicStructuredTextType>;
  avatar?: Maybe<PrismicResumeDataAvatarImageType>;
  first_name?: Maybe<PrismicStructuredTextType>;
  social_links?: Maybe<Array<Maybe<PrismicResumeDataSocialLinks>>>;
};

export type PrismicResume = Node & {
  uid: Scalars['String'];
  data: PrismicResumeDataType;
  dataRaw: Scalars['JSON'];
  prismicId: Scalars['ID'];
  alternate_languages: Array<PrismicAlternateLanguageType>;
  first_publication_date: Scalars['Date'];
  href: Scalars['String'];
  lang: Scalars['String'];
  last_publication_date: Scalars['Date'];
  tags: Array<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
  _previewable: Scalars['ID'];
  id: Scalars['ID'];
  parent?: Maybe<Node>;
  children: Array<Node>;
  internal: Internal;
};

export type PrismicResumeFirst_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicResumeLast_Publication_DateArgs = {
  formatString?: InputMaybe<Scalars['String']>;
  fromNow?: InputMaybe<Scalars['Boolean']>;
  difference?: InputMaybe<Scalars['String']>;
  locale?: InputMaybe<Scalars['String']>;
};

export type PrismicAllDocumentTypes = PrismicResume | PrismicHeader | PrismicTrips | PrismicHome;

export type Query = {
  file?: Maybe<File>;
  allFile: FileConnection;
  directory?: Maybe<Directory>;
  allDirectory: DirectoryConnection;
  site?: Maybe<Site>;
  allSite: SiteConnection;
  siteFunction?: Maybe<SiteFunction>;
  allSiteFunction: SiteFunctionConnection;
  sitePage?: Maybe<SitePage>;
  allSitePage: SitePageConnection;
  sitePlugin?: Maybe<SitePlugin>;
  allSitePlugin: SitePluginConnection;
  siteBuildMetadata?: Maybe<SiteBuildMetadata>;
  allSiteBuildMetadata: SiteBuildMetadataConnection;
  themeUiConfig?: Maybe<ThemeUiConfig>;
  allThemeUiConfig: ThemeUiConfigConnection;
  imageSharp?: Maybe<ImageSharp>;
  allImageSharp: ImageSharpConnection;
  prismicEmbedType?: Maybe<PrismicEmbedType>;
  allPrismicEmbedType: PrismicEmbedTypeConnection;
  prismicTypePathType?: Maybe<PrismicTypePathType>;
  allPrismicTypePathType: PrismicTypePathTypeConnection;
  prismicTrips?: Maybe<PrismicTrips>;
  allPrismicTrips: PrismicTripsConnection;
  prismicHome?: Maybe<PrismicHome>;
  allPrismicHome: PrismicHomeConnection;
  prismicHeader?: Maybe<PrismicHeader>;
  allPrismicHeader: PrismicHeaderConnection;
  prismicResume?: Maybe<PrismicResume>;
  allPrismicResume: PrismicResumeConnection;
};

export type QueryFileArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllFileArgs = {
  filter?: InputMaybe<FileFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<FileSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
  filter?: InputMaybe<DirectoryFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<DirectorySortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
  filter?: InputMaybe<SiteFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySiteFunctionArgs = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteFunctionArgs = {
  filter?: InputMaybe<SiteFunctionFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteFunctionSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSitePageArgs = {
  filter?: InputMaybe<SitePageFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePageSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSitePluginArgs = {
  filter?: InputMaybe<SitePluginFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SitePluginSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
  filter?: InputMaybe<SiteBuildMetadataFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<SiteBuildMetadataSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryThemeUiConfigArgs = {
  preset?: InputMaybe<JsonQueryOperatorInput>;
  prismPreset?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllThemeUiConfigArgs = {
  filter?: InputMaybe<ThemeUiConfigFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ThemeUiConfigSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
  filter?: InputMaybe<ImageSharpFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<ImageSharpSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPrismicEmbedTypeArgs = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllPrismicEmbedTypeArgs = {
  filter?: InputMaybe<PrismicEmbedTypeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<PrismicEmbedTypeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPrismicTypePathTypeArgs = {
  kind?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllPrismicTypePathTypeArgs = {
  filter?: InputMaybe<PrismicTypePathTypeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<PrismicTypePathTypeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPrismicTripsArgs = {
  data?: InputMaybe<PrismicTripsDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllPrismicTripsArgs = {
  filter?: InputMaybe<PrismicTripsFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<PrismicTripsSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPrismicHomeArgs = {
  data?: InputMaybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllPrismicHomeArgs = {
  filter?: InputMaybe<PrismicHomeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<PrismicHomeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPrismicHeaderArgs = {
  data?: InputMaybe<PrismicHeaderDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllPrismicHeaderArgs = {
  filter?: InputMaybe<PrismicHeaderFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<PrismicHeaderSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type QueryPrismicResumeArgs = {
  uid?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<PrismicResumeDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type QueryAllPrismicResumeArgs = {
  filter?: InputMaybe<PrismicResumeFilterInput>;
  sort?: InputMaybe<Array<InputMaybe<PrismicResumeSortInput>>>;
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
};

export type StringQueryOperatorInput = {
  eq?: InputMaybe<Scalars['String']>;
  ne?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  regex?: InputMaybe<Scalars['String']>;
  glob?: InputMaybe<Scalars['String']>;
};

export type IntQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Int']>;
  ne?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type DateQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Date']>;
  ne?: InputMaybe<Scalars['Date']>;
  gt?: InputMaybe<Scalars['Date']>;
  gte?: InputMaybe<Scalars['Date']>;
  lt?: InputMaybe<Scalars['Date']>;
  lte?: InputMaybe<Scalars['Date']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Date']>>>;
};

export type FloatQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Float']>;
  ne?: InputMaybe<Scalars['Float']>;
  gt?: InputMaybe<Scalars['Float']>;
  gte?: InputMaybe<Scalars['Float']>;
  lt?: InputMaybe<Scalars['Float']>;
  lte?: InputMaybe<Scalars['Float']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Float']>>>;
};

export type ImageSharpFilterListInput = {
  elemMatch?: InputMaybe<ImageSharpFilterInput>;
};

export type ImageSharpFilterInput = {
  fixed?: InputMaybe<ImageSharpFixedFilterInput>;
  fluid?: InputMaybe<ImageSharpFluidFilterInput>;
  gatsbyImageData?: InputMaybe<GatsbyImageDataQueryOperatorInput>;
  original?: InputMaybe<ImageSharpOriginalFilterInput>;
  resize?: InputMaybe<ImageSharpResizeFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ImageSharpFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  originalImg?: InputMaybe<StringQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
  presentationWidth?: InputMaybe<IntQueryOperatorInput>;
  presentationHeight?: InputMaybe<IntQueryOperatorInput>;
};

export type GatsbyImageDataQueryOperatorInput = {
  eq?: InputMaybe<Scalars['GatsbyImageData']>;
  ne?: InputMaybe<Scalars['GatsbyImageData']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['GatsbyImageData']>>>;
};

export type ImageSharpOriginalFilterInput = {
  width?: InputMaybe<FloatQueryOperatorInput>;
  height?: InputMaybe<FloatQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
};

export type ImageSharpResizeFilterInput = {
  src?: InputMaybe<StringQueryOperatorInput>;
  tracedSVG?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
  originalName?: InputMaybe<StringQueryOperatorInput>;
};

export type NodeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
  elemMatch?: InputMaybe<NodeFilterInput>;
};

export type InternalFilterInput = {
  content?: InputMaybe<StringQueryOperatorInput>;
  contentDigest?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  fieldOwners?: InputMaybe<StringQueryOperatorInput>;
  ignoreType?: InputMaybe<BooleanQueryOperatorInput>;
  mediaType?: InputMaybe<StringQueryOperatorInput>;
  owner?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  contentFilePath?: InputMaybe<StringQueryOperatorInput>;
};

export type BooleanQueryOperatorInput = {
  eq?: InputMaybe<Scalars['Boolean']>;
  ne?: InputMaybe<Scalars['Boolean']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['Boolean']>>>;
};

export type FileConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
  field: FileFieldSelector;
};

export type FileConnectionMaxArgs = {
  field: FileFieldSelector;
};

export type FileConnectionMinArgs = {
  field: FileFieldSelector;
};

export type FileConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileEdge = {
  next?: Maybe<File>;
  node: File;
  previous?: Maybe<File>;
};

export type PageInfo = {
  currentPage: Scalars['Int'];
  hasPreviousPage: Scalars['Boolean'];
  hasNextPage: Scalars['Boolean'];
  itemCount: Scalars['Int'];
  pageCount: Scalars['Int'];
  perPage?: Maybe<Scalars['Int']>;
  totalCount: Scalars['Int'];
};

export type FileFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  childImageSharp?: InputMaybe<ImageSharpFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type FieldSelectorEnum = 'SELECT';

export type ImageSharpFieldSelector = {
  fixed?: InputMaybe<ImageSharpFixedFieldSelector>;
  fluid?: InputMaybe<ImageSharpFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  original?: InputMaybe<ImageSharpOriginalFieldSelector>;
  resize?: InputMaybe<ImageSharpResizeFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ImageSharpFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  originalImg?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
  presentationWidth?: InputMaybe<FieldSelectorEnum>;
  presentationHeight?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpOriginalFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
};

export type ImageSharpResizeFieldSelector = {
  src?: InputMaybe<FieldSelectorEnum>;
  tracedSVG?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
  originalName?: InputMaybe<FieldSelectorEnum>;
};

export type NodeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type InternalFieldSelector = {
  content?: InputMaybe<FieldSelectorEnum>;
  contentDigest?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  fieldOwners?: InputMaybe<FieldSelectorEnum>;
  ignoreType?: InputMaybe<FieldSelectorEnum>;
  mediaType?: InputMaybe<FieldSelectorEnum>;
  owner?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  contentFilePath?: InputMaybe<FieldSelectorEnum>;
};

export type FileGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<FileEdge>;
  nodes: Array<File>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<FileGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type FileGroupConnectionDistinctArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionMaxArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionMinArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionSumArgs = {
  field: FileFieldSelector;
};

export type FileGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: FileFieldSelector;
};

export type FileFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  childrenImageSharp?: InputMaybe<ImageSharpFilterListInput>;
  childImageSharp?: InputMaybe<ImageSharpFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type FileSortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  childrenImageSharp?: InputMaybe<ImageSharpSortInput>;
  childImageSharp?: InputMaybe<ImageSharpSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type ImageSharpSortInput = {
  fixed?: InputMaybe<ImageSharpFixedSortInput>;
  fluid?: InputMaybe<ImageSharpFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  original?: InputMaybe<ImageSharpOriginalSortInput>;
  resize?: InputMaybe<ImageSharpResizeSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  originalImg?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
  presentationWidth?: InputMaybe<SortOrderEnum>;
  presentationHeight?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpOriginalSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
};

export type ImageSharpResizeSortInput = {
  src?: InputMaybe<SortOrderEnum>;
  tracedSVG?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
  originalName?: InputMaybe<SortOrderEnum>;
};

export type NodeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type InternalSortInput = {
  content?: InputMaybe<SortOrderEnum>;
  contentDigest?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  fieldOwners?: InputMaybe<SortOrderEnum>;
  ignoreType?: InputMaybe<SortOrderEnum>;
  mediaType?: InputMaybe<SortOrderEnum>;
  owner?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  contentFilePath?: InputMaybe<SortOrderEnum>;
};

export type DirectoryConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionMinArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryEdge = {
  next?: Maybe<Directory>;
  node: Directory;
  previous?: Maybe<Directory>;
};

export type DirectoryFieldSelector = {
  sourceInstanceName?: InputMaybe<FieldSelectorEnum>;
  absolutePath?: InputMaybe<FieldSelectorEnum>;
  relativePath?: InputMaybe<FieldSelectorEnum>;
  extension?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  prettySize?: InputMaybe<FieldSelectorEnum>;
  modifiedTime?: InputMaybe<FieldSelectorEnum>;
  accessTime?: InputMaybe<FieldSelectorEnum>;
  changeTime?: InputMaybe<FieldSelectorEnum>;
  birthTime?: InputMaybe<FieldSelectorEnum>;
  root?: InputMaybe<FieldSelectorEnum>;
  dir?: InputMaybe<FieldSelectorEnum>;
  base?: InputMaybe<FieldSelectorEnum>;
  ext?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  relativeDirectory?: InputMaybe<FieldSelectorEnum>;
  dev?: InputMaybe<FieldSelectorEnum>;
  mode?: InputMaybe<FieldSelectorEnum>;
  nlink?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  gid?: InputMaybe<FieldSelectorEnum>;
  rdev?: InputMaybe<FieldSelectorEnum>;
  ino?: InputMaybe<FieldSelectorEnum>;
  atimeMs?: InputMaybe<FieldSelectorEnum>;
  mtimeMs?: InputMaybe<FieldSelectorEnum>;
  ctimeMs?: InputMaybe<FieldSelectorEnum>;
  atime?: InputMaybe<FieldSelectorEnum>;
  mtime?: InputMaybe<FieldSelectorEnum>;
  ctime?: InputMaybe<FieldSelectorEnum>;
  birthtime?: InputMaybe<FieldSelectorEnum>;
  birthtimeMs?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type DirectoryGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<DirectoryEdge>;
  nodes: Array<Directory>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<DirectoryGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type DirectoryGroupConnectionDistinctArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionMaxArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionMinArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionSumArgs = {
  field: DirectoryFieldSelector;
};

export type DirectoryGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: DirectoryFieldSelector;
};

export type DirectoryFilterInput = {
  sourceInstanceName?: InputMaybe<StringQueryOperatorInput>;
  absolutePath?: InputMaybe<StringQueryOperatorInput>;
  relativePath?: InputMaybe<StringQueryOperatorInput>;
  extension?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  prettySize?: InputMaybe<StringQueryOperatorInput>;
  modifiedTime?: InputMaybe<DateQueryOperatorInput>;
  accessTime?: InputMaybe<DateQueryOperatorInput>;
  changeTime?: InputMaybe<DateQueryOperatorInput>;
  birthTime?: InputMaybe<DateQueryOperatorInput>;
  root?: InputMaybe<StringQueryOperatorInput>;
  dir?: InputMaybe<StringQueryOperatorInput>;
  base?: InputMaybe<StringQueryOperatorInput>;
  ext?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  relativeDirectory?: InputMaybe<StringQueryOperatorInput>;
  dev?: InputMaybe<IntQueryOperatorInput>;
  mode?: InputMaybe<IntQueryOperatorInput>;
  nlink?: InputMaybe<IntQueryOperatorInput>;
  uid?: InputMaybe<IntQueryOperatorInput>;
  gid?: InputMaybe<IntQueryOperatorInput>;
  rdev?: InputMaybe<IntQueryOperatorInput>;
  ino?: InputMaybe<FloatQueryOperatorInput>;
  atimeMs?: InputMaybe<FloatQueryOperatorInput>;
  mtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  ctimeMs?: InputMaybe<FloatQueryOperatorInput>;
  atime?: InputMaybe<DateQueryOperatorInput>;
  mtime?: InputMaybe<DateQueryOperatorInput>;
  ctime?: InputMaybe<DateQueryOperatorInput>;
  birthtime?: InputMaybe<DateQueryOperatorInput>;
  birthtimeMs?: InputMaybe<FloatQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type DirectorySortInput = {
  sourceInstanceName?: InputMaybe<SortOrderEnum>;
  absolutePath?: InputMaybe<SortOrderEnum>;
  relativePath?: InputMaybe<SortOrderEnum>;
  extension?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  prettySize?: InputMaybe<SortOrderEnum>;
  modifiedTime?: InputMaybe<SortOrderEnum>;
  accessTime?: InputMaybe<SortOrderEnum>;
  changeTime?: InputMaybe<SortOrderEnum>;
  birthTime?: InputMaybe<SortOrderEnum>;
  root?: InputMaybe<SortOrderEnum>;
  dir?: InputMaybe<SortOrderEnum>;
  base?: InputMaybe<SortOrderEnum>;
  ext?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  relativeDirectory?: InputMaybe<SortOrderEnum>;
  dev?: InputMaybe<SortOrderEnum>;
  mode?: InputMaybe<SortOrderEnum>;
  nlink?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  gid?: InputMaybe<SortOrderEnum>;
  rdev?: InputMaybe<SortOrderEnum>;
  ino?: InputMaybe<SortOrderEnum>;
  atimeMs?: InputMaybe<SortOrderEnum>;
  mtimeMs?: InputMaybe<SortOrderEnum>;
  ctimeMs?: InputMaybe<SortOrderEnum>;
  atime?: InputMaybe<SortOrderEnum>;
  mtime?: InputMaybe<SortOrderEnum>;
  ctime?: InputMaybe<SortOrderEnum>;
  birthtime?: InputMaybe<SortOrderEnum>;
  birthtimeMs?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataFilterInput = {
  title?: InputMaybe<StringQueryOperatorInput>;
  description?: InputMaybe<StringQueryOperatorInput>;
  siteUrl?: InputMaybe<StringQueryOperatorInput>;
};

export type SiteGraphqlTypegenFilterInput = {
  typesOutputPath?: InputMaybe<StringQueryOperatorInput>;
  documentSearchPaths?: InputMaybe<StringQueryOperatorInput>;
  generateOnBuild?: InputMaybe<BooleanQueryOperatorInput>;
};

export type SiteConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionMaxArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionMinArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteEdge = {
  next?: Maybe<Site>;
  node: Site;
  previous?: Maybe<Site>;
};

export type SiteFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFieldSelector>;
  port?: InputMaybe<FieldSelectorEnum>;
  host?: InputMaybe<FieldSelectorEnum>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFieldSelector>;
  polyfill?: InputMaybe<FieldSelectorEnum>;
  pathPrefix?: InputMaybe<FieldSelectorEnum>;
  jsxRuntime?: InputMaybe<FieldSelectorEnum>;
  trailingSlash?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteSiteMetadataFieldSelector = {
  title?: InputMaybe<FieldSelectorEnum>;
  description?: InputMaybe<FieldSelectorEnum>;
  siteUrl?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGraphqlTypegenFieldSelector = {
  typesOutputPath?: InputMaybe<FieldSelectorEnum>;
  documentSearchPaths?: InputMaybe<FieldSelectorEnum>;
  generateOnBuild?: InputMaybe<FieldSelectorEnum>;
};

export type SiteGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteEdge>;
  nodes: Array<Site>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteGroupConnectionDistinctArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionMaxArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionMinArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionSumArgs = {
  field: SiteFieldSelector;
};

export type SiteGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFieldSelector;
};

export type SiteFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  siteMetadata?: InputMaybe<SiteSiteMetadataFilterInput>;
  port?: InputMaybe<IntQueryOperatorInput>;
  host?: InputMaybe<StringQueryOperatorInput>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenFilterInput>;
  polyfill?: InputMaybe<BooleanQueryOperatorInput>;
  pathPrefix?: InputMaybe<StringQueryOperatorInput>;
  jsxRuntime?: InputMaybe<StringQueryOperatorInput>;
  trailingSlash?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  siteMetadata?: InputMaybe<SiteSiteMetadataSortInput>;
  port?: InputMaybe<SortOrderEnum>;
  host?: InputMaybe<SortOrderEnum>;
  graphqlTypegen?: InputMaybe<SiteGraphqlTypegenSortInput>;
  polyfill?: InputMaybe<SortOrderEnum>;
  pathPrefix?: InputMaybe<SortOrderEnum>;
  jsxRuntime?: InputMaybe<SortOrderEnum>;
  trailingSlash?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SiteSiteMetadataSortInput = {
  title?: InputMaybe<SortOrderEnum>;
  description?: InputMaybe<SortOrderEnum>;
  siteUrl?: InputMaybe<SortOrderEnum>;
};

export type SiteGraphqlTypegenSortInput = {
  typesOutputPath?: InputMaybe<SortOrderEnum>;
  documentSearchPaths?: InputMaybe<SortOrderEnum>;
  generateOnBuild?: InputMaybe<SortOrderEnum>;
};

export type SiteFunctionConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
};

export type SiteFunctionConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionEdge = {
  next?: Maybe<SiteFunction>;
  node: SiteFunction;
  previous?: Maybe<SiteFunction>;
};

export type SiteFunctionFieldSelector = {
  functionRoute?: InputMaybe<FieldSelectorEnum>;
  pluginName?: InputMaybe<FieldSelectorEnum>;
  originalAbsoluteFilePath?: InputMaybe<FieldSelectorEnum>;
  originalRelativeFilePath?: InputMaybe<FieldSelectorEnum>;
  relativeCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  absoluteCompiledFilePath?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteFunctionGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteFunctionEdge>;
  nodes: Array<SiteFunction>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteFunctionGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteFunctionGroupConnectionDistinctArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionMaxArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionMinArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionSumArgs = {
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteFunctionFieldSelector;
};

export type SiteFunctionFilterInput = {
  functionRoute?: InputMaybe<StringQueryOperatorInput>;
  pluginName?: InputMaybe<StringQueryOperatorInput>;
  originalAbsoluteFilePath?: InputMaybe<StringQueryOperatorInput>;
  originalRelativeFilePath?: InputMaybe<StringQueryOperatorInput>;
  relativeCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  absoluteCompiledFilePath?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteFunctionSortInput = {
  functionRoute?: InputMaybe<SortOrderEnum>;
  pluginName?: InputMaybe<SortOrderEnum>;
  originalAbsoluteFilePath?: InputMaybe<SortOrderEnum>;
  originalRelativeFilePath?: InputMaybe<SortOrderEnum>;
  relativeCompiledFilePath?: InputMaybe<SortOrderEnum>;
  absoluteCompiledFilePath?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type JsonQueryOperatorInput = {
  eq?: InputMaybe<Scalars['JSON']>;
  ne?: InputMaybe<Scalars['JSON']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['JSON']>>>;
  regex?: InputMaybe<Scalars['JSON']>;
  glob?: InputMaybe<Scalars['JSON']>;
};

export type SitePluginFilterInput = {
  resolve?: InputMaybe<StringQueryOperatorInput>;
  name?: InputMaybe<StringQueryOperatorInput>;
  version?: InputMaybe<StringQueryOperatorInput>;
  nodeAPIs?: InputMaybe<StringQueryOperatorInput>;
  browserAPIs?: InputMaybe<StringQueryOperatorInput>;
  ssrAPIs?: InputMaybe<StringQueryOperatorInput>;
  pluginFilepath?: InputMaybe<StringQueryOperatorInput>;
  pluginOptions?: InputMaybe<JsonQueryOperatorInput>;
  packageJson?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionMaxArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionMinArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageEdge = {
  next?: Maybe<SitePage>;
  node: SitePage;
  previous?: Maybe<SitePage>;
};

export type SitePageFieldSelector = {
  path?: InputMaybe<FieldSelectorEnum>;
  component?: InputMaybe<FieldSelectorEnum>;
  internalComponentName?: InputMaybe<FieldSelectorEnum>;
  componentChunkName?: InputMaybe<FieldSelectorEnum>;
  matchPath?: InputMaybe<FieldSelectorEnum>;
  pageContext?: InputMaybe<FieldSelectorEnum>;
  pluginCreator?: InputMaybe<SitePluginFieldSelector>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePluginFieldSelector = {
  resolve?: InputMaybe<FieldSelectorEnum>;
  name?: InputMaybe<FieldSelectorEnum>;
  version?: InputMaybe<FieldSelectorEnum>;
  nodeAPIs?: InputMaybe<FieldSelectorEnum>;
  browserAPIs?: InputMaybe<FieldSelectorEnum>;
  ssrAPIs?: InputMaybe<FieldSelectorEnum>;
  pluginFilepath?: InputMaybe<FieldSelectorEnum>;
  pluginOptions?: InputMaybe<FieldSelectorEnum>;
  packageJson?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SitePageGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePageEdge>;
  nodes: Array<SitePage>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePageGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageGroupConnectionDistinctArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionMaxArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionMinArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionSumArgs = {
  field: SitePageFieldSelector;
};

export type SitePageGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePageFieldSelector;
};

export type SitePageFilterInput = {
  path?: InputMaybe<StringQueryOperatorInput>;
  component?: InputMaybe<StringQueryOperatorInput>;
  internalComponentName?: InputMaybe<StringQueryOperatorInput>;
  componentChunkName?: InputMaybe<StringQueryOperatorInput>;
  matchPath?: InputMaybe<StringQueryOperatorInput>;
  pageContext?: InputMaybe<JsonQueryOperatorInput>;
  pluginCreator?: InputMaybe<SitePluginFilterInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SitePageSortInput = {
  path?: InputMaybe<SortOrderEnum>;
  component?: InputMaybe<SortOrderEnum>;
  internalComponentName?: InputMaybe<SortOrderEnum>;
  componentChunkName?: InputMaybe<SortOrderEnum>;
  matchPath?: InputMaybe<SortOrderEnum>;
  pageContext?: InputMaybe<SortOrderEnum>;
  pluginCreator?: InputMaybe<SitePluginSortInput>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginSortInput = {
  resolve?: InputMaybe<SortOrderEnum>;
  name?: InputMaybe<SortOrderEnum>;
  version?: InputMaybe<SortOrderEnum>;
  nodeAPIs?: InputMaybe<SortOrderEnum>;
  browserAPIs?: InputMaybe<SortOrderEnum>;
  ssrAPIs?: InputMaybe<SortOrderEnum>;
  pluginFilepath?: InputMaybe<SortOrderEnum>;
  pluginOptions?: InputMaybe<SortOrderEnum>;
  packageJson?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type SitePluginConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionMinArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SitePluginEdge = {
  next?: Maybe<SitePlugin>;
  node: SitePlugin;
  previous?: Maybe<SitePlugin>;
};

export type SitePluginGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SitePluginEdge>;
  nodes: Array<SitePlugin>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SitePluginGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginGroupConnectionDistinctArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionMaxArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionMinArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionSumArgs = {
  field: SitePluginFieldSelector;
};

export type SitePluginGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SitePluginFieldSelector;
};

export type SiteBuildMetadataConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataEdge = {
  next?: Maybe<SiteBuildMetadata>;
  node: SiteBuildMetadata;
  previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldSelector = {
  buildTime?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type SiteBuildMetadataGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<SiteBuildMetadataEdge>;
  nodes: Array<SiteBuildMetadata>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<SiteBuildMetadataGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataGroupConnectionDistinctArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionMaxArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionMinArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionSumArgs = {
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: SiteBuildMetadataFieldSelector;
};

export type SiteBuildMetadataFilterInput = {
  buildTime?: InputMaybe<DateQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type SiteBuildMetadataSortInput = {
  buildTime?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ThemeUiConfigConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
};

export type ThemeUiConfigConnectionDistinctArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigConnectionMaxArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigConnectionMinArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigConnectionSumArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigEdge = {
  next?: Maybe<ThemeUiConfig>;
  node: ThemeUiConfig;
  previous?: Maybe<ThemeUiConfig>;
};

export type ThemeUiConfigFieldSelector = {
  preset?: InputMaybe<FieldSelectorEnum>;
  prismPreset?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type ThemeUiConfigGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ThemeUiConfigEdge>;
  nodes: Array<ThemeUiConfig>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ThemeUiConfigGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ThemeUiConfigGroupConnectionDistinctArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigGroupConnectionMaxArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigGroupConnectionMinArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigGroupConnectionSumArgs = {
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ThemeUiConfigFieldSelector;
};

export type ThemeUiConfigFilterInput = {
  preset?: InputMaybe<JsonQueryOperatorInput>;
  prismPreset?: InputMaybe<JsonQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type ThemeUiConfigSortInput = {
  preset?: InputMaybe<SortOrderEnum>;
  prismPreset?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type ImageSharpConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type ImageSharpEdge = {
  next?: Maybe<ImageSharp>;
  node: ImageSharp;
  previous?: Maybe<ImageSharp>;
};

export type ImageSharpGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<ImageSharpEdge>;
  nodes: Array<ImageSharp>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<ImageSharpGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpGroupConnectionDistinctArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionMaxArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionMinArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionSumArgs = {
  field: ImageSharpFieldSelector;
};

export type ImageSharpGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: ImageSharpFieldSelector;
};

export type PrismicEmbedTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicEmbedTypeEdge>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicEmbedTypeGroupConnection>;
};

export type PrismicEmbedTypeConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeConnectionMinArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeConnectionSumArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeEdge = {
  next?: Maybe<PrismicEmbedType>;
  node: PrismicEmbedType;
  previous?: Maybe<PrismicEmbedType>;
};

export type PrismicEmbedTypeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type PrismicEmbedTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicEmbedTypeEdge>;
  nodes: Array<PrismicEmbedType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicEmbedTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicEmbedTypeGroupConnectionDistinctArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeGroupConnectionMaxArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeGroupConnectionMinArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeGroupConnectionSumArgs = {
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicEmbedTypeFieldSelector;
};

export type PrismicEmbedTypeFilterInput = {
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type PrismicEmbedTypeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type PrismicTypePathTypeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicTypePathTypeEdge>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicTypePathTypeGroupConnection>;
};

export type PrismicTypePathTypeConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeConnectionMinArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeConnectionSumArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeEdge = {
  next?: Maybe<PrismicTypePathType>;
  node: PrismicTypePathType;
  previous?: Maybe<PrismicTypePathType>;
};

export type PrismicTypePathTypeFieldSelector = {
  kind?: InputMaybe<FieldSelectorEnum>;
  path?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type PrismicTypePathTypeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicTypePathTypeEdge>;
  nodes: Array<PrismicTypePathType>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicTypePathTypeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicTypePathTypeGroupConnectionDistinctArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeGroupConnectionMaxArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeGroupConnectionMinArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeGroupConnectionSumArgs = {
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicTypePathTypeFieldSelector;
};

export type PrismicTypePathTypeFilterInput = {
  kind?: InputMaybe<StringQueryOperatorInput>;
  path?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type PrismicTypePathTypeSortInput = {
  kind?: InputMaybe<SortOrderEnum>;
  path?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type PrismicTripsDataTypeFilterInput = {
  page_title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicStructuredTextTypeFilterInput = {
  text?: InputMaybe<StringQueryOperatorInput>;
  html?: InputMaybe<StringQueryOperatorInput>;
  richText?: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
  raw?: InputMaybe<PrismicStructuredTextQueryOperatorInput>;
};

export type PrismicStructuredTextQueryOperatorInput = {
  eq?: InputMaybe<Scalars['PrismicStructuredText']>;
  ne?: InputMaybe<Scalars['PrismicStructuredText']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['PrismicStructuredText']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['PrismicStructuredText']>>>;
};

export type IdQueryOperatorInput = {
  eq?: InputMaybe<Scalars['ID']>;
  ne?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  nin?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
};

export type PrismicAlternateLanguageTypeFilterListInput = {
  elemMatch?: InputMaybe<PrismicAlternateLanguageTypeFilterInput>;
};

export type PrismicAlternateLanguageTypeFilterInput = {
  id?: InputMaybe<IdQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  raw?: InputMaybe<JsonQueryOperatorInput>;
};

export type PrismicTripsConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicTripsEdge>;
  nodes: Array<PrismicTrips>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicTripsGroupConnection>;
};

export type PrismicTripsConnectionDistinctArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsConnectionMaxArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsConnectionMinArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsConnectionSumArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsEdge = {
  next?: Maybe<PrismicTrips>;
  node: PrismicTrips;
  previous?: Maybe<PrismicTrips>;
};

export type PrismicTripsFieldSelector = {
  data?: InputMaybe<PrismicTripsDataTypeFieldSelector>;
  dataRaw?: InputMaybe<FieldSelectorEnum>;
  prismicId?: InputMaybe<FieldSelectorEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFieldSelector>;
  first_publication_date?: InputMaybe<FieldSelectorEnum>;
  href?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  last_publication_date?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  _previewable?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type PrismicTripsDataTypeFieldSelector = {
  page_title?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
};

export type PrismicStructuredTextTypeFieldSelector = {
  text?: InputMaybe<FieldSelectorEnum>;
  html?: InputMaybe<FieldSelectorEnum>;
  richText?: InputMaybe<FieldSelectorEnum>;
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type PrismicAlternateLanguageTypeFieldSelector = {
  id?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type PrismicTripsGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicTripsEdge>;
  nodes: Array<PrismicTrips>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicTripsGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicTripsGroupConnectionDistinctArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsGroupConnectionMaxArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsGroupConnectionMinArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsGroupConnectionSumArgs = {
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicTripsFieldSelector;
};

export type PrismicTripsFilterInput = {
  data?: InputMaybe<PrismicTripsDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type PrismicTripsSortInput = {
  data?: InputMaybe<PrismicTripsDataTypeSortInput>;
  dataRaw?: InputMaybe<SortOrderEnum>;
  prismicId?: InputMaybe<SortOrderEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeSortInput>;
  first_publication_date?: InputMaybe<SortOrderEnum>;
  href?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  last_publication_date?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  _previewable?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type PrismicTripsDataTypeSortInput = {
  page_title?: InputMaybe<PrismicStructuredTextTypeSortInput>;
};

export type PrismicStructuredTextTypeSortInput = {
  text?: InputMaybe<SortOrderEnum>;
  html?: InputMaybe<SortOrderEnum>;
  richText?: InputMaybe<SortOrderEnum>;
  raw?: InputMaybe<SortOrderEnum>;
};

export type PrismicAlternateLanguageTypeSortInput = {
  id?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  raw?: InputMaybe<SortOrderEnum>;
};

export type PrismicHomeDataTypeFilterInput = {
  baseline?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  page_description?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  page_title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHomeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicHomeGroupConnection>;
};

export type PrismicHomeConnectionDistinctArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeConnectionMaxArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeConnectionMinArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeConnectionSumArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeEdge = {
  next?: Maybe<PrismicHome>;
  node: PrismicHome;
  previous?: Maybe<PrismicHome>;
};

export type PrismicHomeFieldSelector = {
  data?: InputMaybe<PrismicHomeDataTypeFieldSelector>;
  dataRaw?: InputMaybe<FieldSelectorEnum>;
  prismicId?: InputMaybe<FieldSelectorEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFieldSelector>;
  first_publication_date?: InputMaybe<FieldSelectorEnum>;
  href?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  last_publication_date?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  _previewable?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type PrismicHomeDataTypeFieldSelector = {
  baseline?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
  page_description?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
  page_title?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
};

export type PrismicHomeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHomeEdge>;
  nodes: Array<PrismicHome>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicHomeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHomeGroupConnectionDistinctArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeGroupConnectionMaxArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeGroupConnectionMinArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeGroupConnectionSumArgs = {
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicHomeFieldSelector;
};

export type PrismicHomeFilterInput = {
  data?: InputMaybe<PrismicHomeDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type PrismicHomeSortInput = {
  data?: InputMaybe<PrismicHomeDataTypeSortInput>;
  dataRaw?: InputMaybe<SortOrderEnum>;
  prismicId?: InputMaybe<SortOrderEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeSortInput>;
  first_publication_date?: InputMaybe<SortOrderEnum>;
  href?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  last_publication_date?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  _previewable?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type PrismicHomeDataTypeSortInput = {
  baseline?: InputMaybe<PrismicStructuredTextTypeSortInput>;
  page_description?: InputMaybe<PrismicStructuredTextTypeSortInput>;
  page_title?: InputMaybe<PrismicStructuredTextTypeSortInput>;
};

export type PrismicHeaderDataTypeFilterInput = {
  nav_links?: InputMaybe<PrismicHeaderDataNavLinksFilterListInput>;
  title?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
};

export type PrismicHeaderDataNavLinksFilterListInput = {
  elemMatch?: InputMaybe<PrismicHeaderDataNavLinksFilterInput>;
};

export type PrismicHeaderDataNavLinksFilterInput = {
  label?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  link?: InputMaybe<PrismicLinkTypeFilterInput>;
};

export type PrismicLinkTypeFilterInput = {
  link_type?: InputMaybe<PrismicLinkTypeEnumQueryOperatorInput>;
  isBroken?: InputMaybe<BooleanQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  target?: InputMaybe<StringQueryOperatorInput>;
  size?: InputMaybe<IntQueryOperatorInput>;
  id?: InputMaybe<IdQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  slug?: InputMaybe<StringQueryOperatorInput>;
  uid?: InputMaybe<StringQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
  raw?: InputMaybe<JsonQueryOperatorInput>;
};

export type PrismicLinkTypeEnumQueryOperatorInput = {
  eq?: InputMaybe<PrismicLinkTypeEnum>;
  ne?: InputMaybe<PrismicLinkTypeEnum>;
  in?: InputMaybe<Array<InputMaybe<PrismicLinkTypeEnum>>>;
  nin?: InputMaybe<Array<InputMaybe<PrismicLinkTypeEnum>>>;
};

export type PrismicHeaderConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHeaderEdge>;
  nodes: Array<PrismicHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicHeaderGroupConnection>;
};

export type PrismicHeaderConnectionDistinctArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderConnectionMaxArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderConnectionMinArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderConnectionSumArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderEdge = {
  next?: Maybe<PrismicHeader>;
  node: PrismicHeader;
  previous?: Maybe<PrismicHeader>;
};

export type PrismicHeaderFieldSelector = {
  data?: InputMaybe<PrismicHeaderDataTypeFieldSelector>;
  dataRaw?: InputMaybe<FieldSelectorEnum>;
  prismicId?: InputMaybe<FieldSelectorEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFieldSelector>;
  first_publication_date?: InputMaybe<FieldSelectorEnum>;
  href?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  last_publication_date?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  _previewable?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type PrismicHeaderDataTypeFieldSelector = {
  nav_links?: InputMaybe<PrismicHeaderDataNavLinksFieldSelector>;
  title?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
};

export type PrismicHeaderDataNavLinksFieldSelector = {
  label?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
  link?: InputMaybe<PrismicLinkTypeFieldSelector>;
};

export type PrismicLinkTypeFieldSelector = {
  link_type?: InputMaybe<FieldSelectorEnum>;
  isBroken?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  target?: InputMaybe<FieldSelectorEnum>;
  size?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  slug?: InputMaybe<FieldSelectorEnum>;
  uid?: InputMaybe<FieldSelectorEnum>;
  localFile?: InputMaybe<FileFieldSelector>;
  raw?: InputMaybe<FieldSelectorEnum>;
};

export type PrismicHeaderGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicHeaderEdge>;
  nodes: Array<PrismicHeader>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicHeaderGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicHeaderGroupConnectionDistinctArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderGroupConnectionMaxArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderGroupConnectionMinArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderGroupConnectionSumArgs = {
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicHeaderFieldSelector;
};

export type PrismicHeaderFilterInput = {
  data?: InputMaybe<PrismicHeaderDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type PrismicHeaderSortInput = {
  data?: InputMaybe<PrismicHeaderDataTypeSortInput>;
  dataRaw?: InputMaybe<SortOrderEnum>;
  prismicId?: InputMaybe<SortOrderEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeSortInput>;
  first_publication_date?: InputMaybe<SortOrderEnum>;
  href?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  last_publication_date?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  _previewable?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type PrismicHeaderDataTypeSortInput = {
  nav_links?: InputMaybe<PrismicHeaderDataNavLinksSortInput>;
  title?: InputMaybe<PrismicStructuredTextTypeSortInput>;
};

export type PrismicHeaderDataNavLinksSortInput = {
  label?: InputMaybe<PrismicStructuredTextTypeSortInput>;
  link?: InputMaybe<PrismicLinkTypeSortInput>;
};

export type PrismicLinkTypeSortInput = {
  link_type?: InputMaybe<SortOrderEnum>;
  isBroken?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  target?: InputMaybe<SortOrderEnum>;
  size?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  slug?: InputMaybe<SortOrderEnum>;
  uid?: InputMaybe<SortOrderEnum>;
  localFile?: InputMaybe<FileSortInput>;
  raw?: InputMaybe<SortOrderEnum>;
};

export type PrismicResumeDataTypeFilterInput = {
  abstract?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  avatar?: InputMaybe<PrismicResumeDataAvatarImageTypeFilterInput>;
  first_name?: InputMaybe<PrismicStructuredTextTypeFilterInput>;
  social_links?: InputMaybe<PrismicResumeDataSocialLinksFilterListInput>;
};

export type PrismicResumeDataAvatarImageTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type PrismicImageDimensionsTypeFilterInput = {
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ImgixFixedFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  width?: InputMaybe<IntQueryOperatorInput>;
  height?: InputMaybe<IntQueryOperatorInput>;
};

export type ImgixFluidFilterInput = {
  base64?: InputMaybe<StringQueryOperatorInput>;
  src?: InputMaybe<StringQueryOperatorInput>;
  srcSet?: InputMaybe<StringQueryOperatorInput>;
  srcWebp?: InputMaybe<StringQueryOperatorInput>;
  srcSetWebp?: InputMaybe<StringQueryOperatorInput>;
  sizes?: InputMaybe<StringQueryOperatorInput>;
  aspectRatio?: InputMaybe<FloatQueryOperatorInput>;
};

export type PrismicResumeDataSocialLinksFilterListInput = {
  elemMatch?: InputMaybe<PrismicResumeDataSocialLinksFilterInput>;
};

export type PrismicResumeDataSocialLinksFilterInput = {
  icon?: InputMaybe<PrismicResumeDataSocialLinksIconImageTypeFilterInput>;
  link?: InputMaybe<PrismicLinkTypeFilterInput>;
};

export type PrismicResumeDataSocialLinksIconImageTypeFilterInput = {
  alt?: InputMaybe<StringQueryOperatorInput>;
  copyright?: InputMaybe<StringQueryOperatorInput>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFilterInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  fixed?: InputMaybe<ImgixFixedFilterInput>;
  fluid?: InputMaybe<ImgixFluidFilterInput>;
  gatsbyImageData?: InputMaybe<JsonQueryOperatorInput>;
  localFile?: InputMaybe<FileFilterInput>;
};

export type PrismicResumeConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicResumeEdge>;
  nodes: Array<PrismicResume>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicResumeGroupConnection>;
};

export type PrismicResumeConnectionDistinctArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeConnectionMaxArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeConnectionMinArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeConnectionSumArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeEdge = {
  next?: Maybe<PrismicResume>;
  node: PrismicResume;
  previous?: Maybe<PrismicResume>;
};

export type PrismicResumeFieldSelector = {
  uid?: InputMaybe<FieldSelectorEnum>;
  data?: InputMaybe<PrismicResumeDataTypeFieldSelector>;
  dataRaw?: InputMaybe<FieldSelectorEnum>;
  prismicId?: InputMaybe<FieldSelectorEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFieldSelector>;
  first_publication_date?: InputMaybe<FieldSelectorEnum>;
  href?: InputMaybe<FieldSelectorEnum>;
  lang?: InputMaybe<FieldSelectorEnum>;
  last_publication_date?: InputMaybe<FieldSelectorEnum>;
  tags?: InputMaybe<FieldSelectorEnum>;
  type?: InputMaybe<FieldSelectorEnum>;
  url?: InputMaybe<FieldSelectorEnum>;
  _previewable?: InputMaybe<FieldSelectorEnum>;
  id?: InputMaybe<FieldSelectorEnum>;
  parent?: InputMaybe<NodeFieldSelector>;
  children?: InputMaybe<NodeFieldSelector>;
  internal?: InputMaybe<InternalFieldSelector>;
};

export type PrismicResumeDataTypeFieldSelector = {
  abstract?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
  avatar?: InputMaybe<PrismicResumeDataAvatarImageTypeFieldSelector>;
  first_name?: InputMaybe<PrismicStructuredTextTypeFieldSelector>;
  social_links?: InputMaybe<PrismicResumeDataSocialLinksFieldSelector>;
};

export type PrismicResumeDataAvatarImageTypeFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  copyright?: InputMaybe<FieldSelectorEnum>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  fixed?: InputMaybe<ImgixFixedFieldSelector>;
  fluid?: InputMaybe<ImgixFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  localFile?: InputMaybe<FileFieldSelector>;
};

export type PrismicImageDimensionsTypeFieldSelector = {
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
};

export type ImgixFixedFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  width?: InputMaybe<FieldSelectorEnum>;
  height?: InputMaybe<FieldSelectorEnum>;
};

export type ImgixFluidFieldSelector = {
  base64?: InputMaybe<FieldSelectorEnum>;
  src?: InputMaybe<FieldSelectorEnum>;
  srcSet?: InputMaybe<FieldSelectorEnum>;
  srcWebp?: InputMaybe<FieldSelectorEnum>;
  srcSetWebp?: InputMaybe<FieldSelectorEnum>;
  sizes?: InputMaybe<FieldSelectorEnum>;
  aspectRatio?: InputMaybe<FieldSelectorEnum>;
};

export type PrismicResumeDataSocialLinksFieldSelector = {
  icon?: InputMaybe<PrismicResumeDataSocialLinksIconImageTypeFieldSelector>;
  link?: InputMaybe<PrismicLinkTypeFieldSelector>;
};

export type PrismicResumeDataSocialLinksIconImageTypeFieldSelector = {
  alt?: InputMaybe<FieldSelectorEnum>;
  copyright?: InputMaybe<FieldSelectorEnum>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeFieldSelector>;
  url?: InputMaybe<FieldSelectorEnum>;
  fixed?: InputMaybe<ImgixFixedFieldSelector>;
  fluid?: InputMaybe<ImgixFluidFieldSelector>;
  gatsbyImageData?: InputMaybe<FieldSelectorEnum>;
  localFile?: InputMaybe<FileFieldSelector>;
};

export type PrismicResumeGroupConnection = {
  totalCount: Scalars['Int'];
  edges: Array<PrismicResumeEdge>;
  nodes: Array<PrismicResume>;
  pageInfo: PageInfo;
  distinct: Array<Scalars['String']>;
  max?: Maybe<Scalars['Float']>;
  min?: Maybe<Scalars['Float']>;
  sum?: Maybe<Scalars['Float']>;
  group: Array<PrismicResumeGroupConnection>;
  field: Scalars['String'];
  fieldValue?: Maybe<Scalars['String']>;
};

export type PrismicResumeGroupConnectionDistinctArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeGroupConnectionMaxArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeGroupConnectionMinArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeGroupConnectionSumArgs = {
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeGroupConnectionGroupArgs = {
  skip?: InputMaybe<Scalars['Int']>;
  limit?: InputMaybe<Scalars['Int']>;
  field: PrismicResumeFieldSelector;
};

export type PrismicResumeFilterInput = {
  uid?: InputMaybe<StringQueryOperatorInput>;
  data?: InputMaybe<PrismicResumeDataTypeFilterInput>;
  dataRaw?: InputMaybe<JsonQueryOperatorInput>;
  prismicId?: InputMaybe<IdQueryOperatorInput>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeFilterListInput>;
  first_publication_date?: InputMaybe<DateQueryOperatorInput>;
  href?: InputMaybe<StringQueryOperatorInput>;
  lang?: InputMaybe<StringQueryOperatorInput>;
  last_publication_date?: InputMaybe<DateQueryOperatorInput>;
  tags?: InputMaybe<StringQueryOperatorInput>;
  type?: InputMaybe<StringQueryOperatorInput>;
  url?: InputMaybe<StringQueryOperatorInput>;
  _previewable?: InputMaybe<IdQueryOperatorInput>;
  id?: InputMaybe<StringQueryOperatorInput>;
  parent?: InputMaybe<NodeFilterInput>;
  children?: InputMaybe<NodeFilterListInput>;
  internal?: InputMaybe<InternalFilterInput>;
};

export type PrismicResumeSortInput = {
  uid?: InputMaybe<SortOrderEnum>;
  data?: InputMaybe<PrismicResumeDataTypeSortInput>;
  dataRaw?: InputMaybe<SortOrderEnum>;
  prismicId?: InputMaybe<SortOrderEnum>;
  alternate_languages?: InputMaybe<PrismicAlternateLanguageTypeSortInput>;
  first_publication_date?: InputMaybe<SortOrderEnum>;
  href?: InputMaybe<SortOrderEnum>;
  lang?: InputMaybe<SortOrderEnum>;
  last_publication_date?: InputMaybe<SortOrderEnum>;
  tags?: InputMaybe<SortOrderEnum>;
  type?: InputMaybe<SortOrderEnum>;
  url?: InputMaybe<SortOrderEnum>;
  _previewable?: InputMaybe<SortOrderEnum>;
  id?: InputMaybe<SortOrderEnum>;
  parent?: InputMaybe<NodeSortInput>;
  children?: InputMaybe<NodeSortInput>;
  internal?: InputMaybe<InternalSortInput>;
};

export type PrismicResumeDataTypeSortInput = {
  abstract?: InputMaybe<PrismicStructuredTextTypeSortInput>;
  avatar?: InputMaybe<PrismicResumeDataAvatarImageTypeSortInput>;
  first_name?: InputMaybe<PrismicStructuredTextTypeSortInput>;
  social_links?: InputMaybe<PrismicResumeDataSocialLinksSortInput>;
};

export type PrismicResumeDataAvatarImageTypeSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  copyright?: InputMaybe<SortOrderEnum>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  fixed?: InputMaybe<ImgixFixedSortInput>;
  fluid?: InputMaybe<ImgixFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  localFile?: InputMaybe<FileSortInput>;
};

export type PrismicImageDimensionsTypeSortInput = {
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
};

export type ImgixFixedSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  width?: InputMaybe<SortOrderEnum>;
  height?: InputMaybe<SortOrderEnum>;
};

export type ImgixFluidSortInput = {
  base64?: InputMaybe<SortOrderEnum>;
  src?: InputMaybe<SortOrderEnum>;
  srcSet?: InputMaybe<SortOrderEnum>;
  srcWebp?: InputMaybe<SortOrderEnum>;
  srcSetWebp?: InputMaybe<SortOrderEnum>;
  sizes?: InputMaybe<SortOrderEnum>;
  aspectRatio?: InputMaybe<SortOrderEnum>;
};

export type PrismicResumeDataSocialLinksSortInput = {
  icon?: InputMaybe<PrismicResumeDataSocialLinksIconImageTypeSortInput>;
  link?: InputMaybe<PrismicLinkTypeSortInput>;
};

export type PrismicResumeDataSocialLinksIconImageTypeSortInput = {
  alt?: InputMaybe<SortOrderEnum>;
  copyright?: InputMaybe<SortOrderEnum>;
  dimensions?: InputMaybe<PrismicImageDimensionsTypeSortInput>;
  url?: InputMaybe<SortOrderEnum>;
  fixed?: InputMaybe<ImgixFixedSortInput>;
  fluid?: InputMaybe<ImgixFluidSortInput>;
  gatsbyImageData?: InputMaybe<SortOrderEnum>;
  localFile?: InputMaybe<FileSortInput>;
};

export type HeaderQueryVariables = Exact<{ [key: string]: never }>;

export type HeaderQuery = {
  prismicHeader?: {
    data: {
      title?: { text?: string | null } | null;
      nav_links?: Array<{
        link?: { url?: string | null } | null;
        label?: { text?: string | null } | null;
      } | null> | null;
    };
  } | null;
};

export type HomeHeadQueryVariables = Exact<{ [key: string]: never }>;

export type HomeHeadQuery = {
  prismicHome?: {
    data: {
      page_title?: { text?: string | null } | null;
      page_description?: { text?: string | null } | null;
    };
  } | null;
};

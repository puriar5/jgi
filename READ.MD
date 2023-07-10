# Reusable Modules documentation

<details>
  <summary> Leadspace </summary>

  <blockquote>

  <details>

<summary>Leadspace.blade</summary>
## Leadspace.blade 
### Code
```
{{--
    script[banner.js]script
    style[modules/leadspace.scss]style
    Title: Leadspace
    Description: Leadspace Description]
    Category: outside
    Icon: admin-tools
    Keywords: leadspace
    Mode: auto
    Align: center
    PostTypes: post page
    SupportsMode: false
    SupportsMultiple: true
    SupportsAlign: left right
    SupportsAlignContent: center
    EnqueueStyle:
    EnqueueScript:
    EnqueueAssets: assetsEnqueue
    EnqueueAssetsCSS:
    EnqueueAssetsJS:
--}}
<!-- leadspace html goes here -->

@if ( ! empty( $is_preview  ) )
    @php
        /* Render screenshot for example */
        $imgUrl = \Roots\asset('images/preview/leadspace.webp')->uri();
    @endphp
    <img loading="lazy" src="{!! $imgUrl !!}" style="width:100%;height:auto;">
@else

    <h1 class="h1 u-text-align-center">WEB UI</h1>

    <!-- 50/50 -->
    <section class="m-leadspace-50/50 u-py-20">
        <div class="l-container">
            <div class="l-grid">
                    <x-headline class="col-span-12 col-span-lg-4 col-start-lg-2" blockAligns='start'
                        stack='{"default": "5", "md": "6", "lg": "10"}'
                        eyebrow='{"as":"","content":"","variant":"","class":""}'
                        title='{"as": "h1", "content":"Long title goes here", "class": "m-leadspace__title"}'
                        description='{"as":"p","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea commodi explicabo, atque, ipsa neque blanditiis numquam eveniet sequi laborum, cum dolore consequuntur itaque sapiente beatae quod omnis quas alias.","class":"m-leadspace__description"}'
                        cta='{"title":"Read the article","variant":"filled","href":"#","buttonTheme":"primary"}'
                    >
                    </x-headline>
                <div class="col-span-12 col-span-lg-5 col-start-lg-7">
                    <x-image 
                        class="u-bg-black-dark" 
                        imgClass="" 
                        ratio="u-ratio-16x9"
                        objectFit="cover"
                        isLazy=true
                        placeholder="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    >
                    </x-image>
                </div>
            </div>
        </div>
    </section>
    <!-- 50/50 Video-->
    <section class="m-leadspace-50/50 u-py-20">
        <div class="l-container">
            <div class="l-grid">
                    <!-- <x-stack class="col-span-12 col-span-lg-4 col-start-lg-2 u-text-align-center u-text-align-lg-start l-stack-5 l-stack-md-6 l-stack-lg-10" as="headline">
                        <x-text class="m-leadspace__eyebrow" variant="p" as="p">Eyebrow goes here</x-text>
                        <x-text class='m-leadspace__title' variant="h1" as='h1'>Long title goes here</x-text>
                        <x-text class='m-leadspace__description' as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea commodi explicabo, atque, ipsa neque blanditiis numquam eveniet sequi laborum, cum dolore consequuntur itaque sapiente beatae quod omnis quas alias.</x-text>
                        <x-link class='' 
                            href="#"
                            tabindex=0
                            title="Title goes here"
                            buttonTheme="primary"
                            variant="filled"
                            >
                                Read the article
                        </x-link>
                    </x-stack> -->
                    <x-headline class="col-span-12 col-span-lg-4 col-start-lg-2" blockAligns='start'
                        stack='{"default": "5", "md": "6", "lg": "10"}'
                        eyebrow='{"as":"p","content":"Eyebrow goes here","variant":""}'
                        title='{"as": "h1", "content":"Long title goes here"}'
                        description='{"as":"p","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea commodi explicabo, atque, ipsa neque blanditiis numquam eveniet sequi laborum, cum dolore consequuntur itaque sapiente beatae quod omnis quas alias."}'
                        cta='{"title":"Read the article","variant":"filled","href":"#","buttonTheme":"primary"}'
                    >
                    </x-headline>
                <div class="col-span-12 col-span-lg-5 col-start-lg-7">
                    <x-video 
                        as=""
                        class="" 
                        isLazy="true"
                        videoClass="" 
                        figureClass="" 
                        autoPlay=false
                        objectFit="cover"
                        ratio="u-ratio-1x1"
                        placeholder="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                        src="https://outsidewebdev.wpengine.com/wp-content/uploads/2023/07/pexels-yaroslav-shuraev-89680442160p.mp4"
                    >
                    </x-video>
                </div>
            </div>
        </div>
    </section>

    <!-- FULL BG: TEXT LEFT VARIATION -->
    <section class="m-leadspace-full-bg u-py-20 u-position-relative">
        <div class="l-container">
            <x-image 
                imgClass="" 
                isLazy=true
                objectFit="cover"
                ratio="u-ratio-16x9"
                class="u-bg-black-dark" 
                placeholder="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                >
            </x-image>
            <div class="l-grid u-position-relative u-text-white-light u-z-9">
                <x-stack class="col-span-12 col-span-lg-4 col-start-lg-2 u-text-align-center u-text-align-lg-start l-stack-5 l-stack-md-6 l-stack-lg-10" as="headline">
                    <x-stack class="l-stack-3">
                        <x-text class='m-leadspace__title' variant="h1" as='h1'>Long title goes here</x-text>
                        <x-text class="m-leadspace__eyebrow" variant="p" as="p">Eyebrow goes here</x-text>
                    </x-stack>
                    <x-text class='m-leadspace__description' as='p'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea commodi explicabo, atque, ipsa neque blanditiis numquam eveniet sequi laborum, cum dolore consequuntur itaque sapiente beatae quod omnis quas alias.</x-text>
                    <x-link class='' 
                        href="#"
                        tabindex=0
                        title="Title goes here"
                        buttonTheme="primary"
                        variant="filled"
                        >
                            Read the article
                    </x-link>
                </x-stack>
                <div class="col-span-12 col-span-lg-5 col-start-lg-7">
                </div>
            </div>
        </div>
    </section>

    <br>
    <br>
    <br>
    <br>

    <!-- FULL BG: TEXT CENTER VARIATION -->
    <section class="m-leadspace-full-bg u-py-20 u-position-relative">
        <div class="l-container">
            <x-video 
                    as=""
                    class="" 
                    videoClass="" 
                    figureClass="" 
                    autoPlay=true
                    objectFit="cover"
                    ratio="u-ratio-1x1"
                    placeholder="https://images.unsplash.com/photo-1682686578615-39549501dd08?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                    src="https://outsidewebdev.wpengine.com/wp-content/uploads/2023/07/pexels-yaroslav-shuraev-89680442160p.mp4"
                >
                </x-video>
            <div class="l-grid u-position-relative u-text-white-light u-z-9">
                <x-headline class="col-span-12 col-span-lg-4 col-start-lg-5" blockAligns='center'
                        stack='{"default": "5", "md": "6", "lg": "10"}'
                        eyebrow='{"as":"p","content":"Eyebrow goes here","variant":""}'
                        title='{"as": "h1", "content":"Long title goes here"}'
                        description='{"as":"p","content":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque ea commodi explicabo, atque, ipsa neque blanditiis numquam eveniet sequi laborum, cum dolore consequuntur itaque sapiente beatae quod omnis quas alias."}'
                        cta='{"title":"Read the article","variant":"filled","href":"#","buttonTheme":"primary"}'
                    >
                </x-headline>
                <div class="col-span-12 col-span-lg-5 col-start-lg-7">
                </div>
            </div>
        </div>
    </section>
@endif
```
</blockquote>
</details>

</details>


#### What's in this package ?
The sketch file should contain every icons / svg resources used in the project.  

#### How to initialize this package ?
Just `yarn` it

#### Icon generation
From sketch -> Ctrl + Shift + E -> Export all slices to `./export` 
Then run `yarn create-components`  
This command will output optimized svg files in `build/svgo` and ready to use react components in `build/components`  
Then merge those components in `shared/components/<whatever>`

You are allowed to manually modify generated components but **be careful** when manually merging into `shared/components`.

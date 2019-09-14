# TypeScript

#### Environment Setup
1. create file 'main.ts'
    -   ```js
        let message = 'Hello';
        console.log(message);
        ```
    - <em>terminal</em>: 
        ```js
        tsc main.ts
        ```
2. create file 'main.js'
    - <em>terminal</em>: 
        ```js
        node main.js    
        ```
3. in main.ts, 
        ```js
        export {};
        ```
        main.js would automatically reflected.
4. In terminal, 
    ```js
    tsc main --watch
    ```
    save file, compiler would <em>automatically refresh</em>.

#### Variable Declaration
Encourages use of ```let``` and ```const```.
<em>Scope</em>: <u>Global</u> scope, <u>Function</u> scope, <u>Block</u> scope.

1. <em>let x;</em>
    - can <u>without initialization</u>
    - can be <u>reassigned</u>
2. <em>const y = 20;</em>
    - always <u>initialize</u> with a value
    - <u>never be reassigned</u>

#### Variable Type
<em>Assign type</em>: add ```: Type``` after variableName. <u>(selectable)</u>
    ```js
    let name = 'Selina';
    let sentence: string = `My name is ${name}
    I am a beginner in ts`;
    ```

#### Function

#### Interface

#### class & Access Modifier
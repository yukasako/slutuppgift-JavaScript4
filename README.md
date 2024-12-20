# **Project Setup Instructions**

## **Backend**

### **Mock Server: node.js and json-server**

The backend is a mock server created using `node.js`, `express` and `json-server`.

#### **Setup Instructions**:

1. Navigate to the backend directory:

   ```
      cd backend
   ```

2. Install dependencies:

   ```
      npm install
   ```

3. Start json-server:

   ```
      npx json-server db.json -p 3001
   ```
4. **Open a new terminal** and navigate to the backend directory :

   ```
      cd backend
   ```

5. Start mock server:

   ```
      npm run dev
   ```

6. The mock server will run on:
   - http://localhost:3000/api/products
   - http://localhost:3000/api/cart

## **Frontend**

### **Developed with: React**

### **Testing Framework: Vitest**

#### **Setup Instructions**:

1. Navigate to the frontend directory:

   ```
      cd frontend
   ```

2. Install dependencies:

   ```
      npm install
   ```

3. Start the development server:

   ```
      npm run dev
   ```

4. Run tests by vitest with a new terminal:
   ```
      cd frontend
   ```
   ```
      npm test
   ```

# Prerequisites for Ubuntu
## Install docker and docker-compose
1. **Update and Upgrade Your System**:
   ```bash
   sudo apt-get update
   sudo apt-get upgrade
   ```

2. **Fix Broken Packages**:
   ```bash
   sudo apt-get install -f
   ```

3. **Clean Up Package Database**:
   ```bash
   sudo apt-get clean
   sudo apt-get autoclean
   ```

4. **Remove Held Packages**:
   ```bash
   sudo apt-get autoremove
   ```

5. **Install Docker from the Official Repository**:
   - Remove any existing Docker packages:
     ```bash
     sudo apt-get remove docker docker-engine docker.io containerd runc
     ```
   - Install required packages:
     ```bash
     sudo apt-get install apt-transport-https ca-certificates curl software-properties-common
     ```
   - Add Docker’s official GPG key:
     ```bash
     curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
     ```
   - Add the Docker repository:
     ```bash
     sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
     ```
   - Update the package database again:
     ```bash
     sudo apt-get update
     ```
   - Install Docker:
     ```bash
     sudo apt-get install docker-ce docker-ce-cli containerd.io
     ```

## Install Node.js:

### Method 1: Using the Default Repository

1. **Update your package index**:
   ```bash
   sudo apt-get update
   ```

2. **Install Node.js**:
   ```bash
   sudo apt-get install nodejs
   ```

3. **Install npm (Node Package Manager)**:
   ```bash
   sudo apt-get install npm
   ```

4. **Verify the installation**:
   ```bash
   node -v
   npm -v
   ```
## Install npm dependencies
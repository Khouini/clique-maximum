const customlog = {};

// Define log categories and their corresponding colors
const logCategories = {
  danger: '\x1b[31m', // Red
  success: '\x1b[32m', // Green
  warning: '\x1b[33m', // Yellow
  info: '\x1b[34m', // Blue
};

// ANSI escape code for resetting color
const resetColor = '\x1b[0m';

// Create custom log functions for each category
for (const category in logCategories) {
  if (logCategories.hasOwnProperty(category)) {
    customlog[category] = message => {
      const timestamp = new Date().toISOString();
      //   const logMessage = `[${timestamp}] [${category.toUpperCase()}] ${message}`;
      const logMessage = message;
      const coloredLogMessage = `${logCategories[category]}${logMessage}${resetColor}`;

      // Display the colored log message in the console
      console.log(coloredLogMessage);
    };
  }
}

module.exports = customlog;

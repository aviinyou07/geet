// Updated Google Apps Script Code
// 1. Go to https://script.google.com
// 2. Open your existing project
// 3. Replace the code with this updated version
// 4. Save and redeploy

function doPost(e) {
  try {
    // Get the data from the POST request (FormData format)
    const data = e.parameter; // FormData comes as e.parameter, not e.postData.contents
    
    // Specify your Google Sheet ID here (get it from the URL of your Google Sheet)
    const SHEET_ID = 'YOUR_GOOGLE_SHEET_ID_HERE'; // Replace with your actual Sheet ID
    const SHEET_NAME = 'Contact Form Submissions'; // Name of the sheet tab
    
    // Open the spreadsheet
    let sheet;
    try {
      const spreadsheet = SpreadsheetApp.openById(SHEET_ID);
      sheet = spreadsheet.getSheetByName(SHEET_NAME);
      
      // If sheet doesn't exist, create it with headers
      if (!sheet) {
        sheet = spreadsheet.insertSheet(SHEET_NAME);
        sheet.getRange(1, 1, 1, 6).setValues([
          ['Timestamp', 'Name', 'Email', 'Query Type', 'Message', 'Status']
        ]);
        // Style the header row
        sheet.getRange(1, 1, 1, 6).setFontWeight('bold');
        sheet.getRange(1, 1, 1, 6).setBackground('#f0f0f0');
      }
    } catch (error) {
      throw new Error('Could not access Google Sheet. Please check the SHEET_ID: ' + error.toString());
    }
    
    // Prepare the row data
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.name || '',
      data.email || '',
      data.queryType || '',
      data.message || '',
      'New'
    ];
    
    // Add the data to the sheet
    sheet.appendRow(rowData);
    
    // Auto-resize columns for better readability
    sheet.autoResizeColumns(1, 6);
    
    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: 'Contact form submitted successfully!',
        timestamp: timestamp.toISOString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    // Log the error
    console.error('Error in doPost:', error);
    
    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        message: 'Error submitting form: ' + error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

// Function to handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({
      message: 'Contact form endpoint is working. Use POST to submit data.',
      timestamp: new Date().toISOString()
    }))
    .setMimeType(ContentService.MimeType.JSON);
}

// Optional: Function to test the script
function testScript() {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    queryType: 'General Inquiry',
    message: 'This is a test message',
    timestamp: new Date().toISOString()
  };
  
  const mockEvent = {
    parameter: testData // FormData comes as parameter
  };
  
  const result = doPost(mockEvent);
  Logger.log(result.getContent());
}

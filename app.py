from flask import Flask, request, jsonify
from models.message import process_message

app = Flask(__name__)

@app.route('/process-message', methods=['POST'])
def process_message_route():
    message = request.form['message']
    preference = request.form['preference']
    processed_message = process_message(message, preference)
    return jsonify({'processedMessage': processed_message})

if __name__ == '__main__':
    app.run()
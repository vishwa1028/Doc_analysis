from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS for all routes

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()
    text_body = data.get('text_body', '')
    keyword_macros = data.get('keyword_macros', [])
    analysis_type = data.get('analysis_type', '')

    if analysis_type == 'top_words':
        words = text_body.split()
        filtered_words = [word for word in words if not any(km in word.lower() for km in keyword_macros)]
        result = filtered_words[:2]  # Top 2 words as example
        return jsonify({'results': [{'keyword_macro': keyword_macros[0], 'analysis_type': analysis_type, 'value': result}]})

    return jsonify({'error': 'Invalid analysis type'}), 400

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
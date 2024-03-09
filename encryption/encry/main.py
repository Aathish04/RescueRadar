from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from Crypto.Cipher import DES
from Crypto.Random import get_random_bytes

app = FastAPI()

def pad(data):
    pad_length = 8 - (len(data) % 8)
    return data + pad_length.to_bytes(1, byteorder='big') * pad_length

def unpad(data):
    return data[:-data[-1]]

def generate_keys():
    return get_random_bytes(8)

def encrypt(plain_text, key):
    cipher = DES.new(key, DES.MODE_ECB)
    padded_data = pad(plain_text.encode())
    encrypted_data = cipher.encrypt(padded_data)
    return encrypted_data

def decrypt(encrypted_data, key):
    cipher = DES.new(key, DES.MODE_ECB)
    decrypted_data = cipher.decrypt(encrypted_data)
    return unpad(decrypted_data).decode()

class EncryptRequest(BaseModel):
    plain_text: str
 

class DecryptRequest(BaseModel):
    encrypted_data: str

mykey = generate_keys()

@app.post("/encrypt/")
def encrypt_text(request: EncryptRequest):
    encrypted_data = encrypt(request.plain_text, mykey)
    return {"encrypted_data": encrypted_data.hex()}

@app.post("/decrypt/")
def decrypt_text(request: DecryptRequest):
    try:
        decrypted_text = decrypt(bytes.fromhex(request.encrypted_data), mykey)
        return {"decrypted_text": decrypted_text}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

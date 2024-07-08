export const IDL = {
  "version": "0.1.0",
  "name": "dolphin_presale",
  "constants": [
    {
      "name": "GLOBAL_STATE_SEED",
      "type": "bytes",
      "value": "[71, 76, 79, 66, 65, 76, 45, 83, 84, 65, 84, 69, 45, 83, 69, 69, 68]"
    }
  ],
  "instructions": [
    {
      "name": "initialize",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateAuth",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "newAuthority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": []
    },
    {
      "name": "updateConfig",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "isInitialized",
          "type": "bool"
        }
      ]
    },
    {
      "name": "createPresale",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "softcapAmount",
          "type": "u64"
        },
        {
          "name": "hardcapAmount",
          "type": "u64"
        },
        {
          "name": "maxTokenAmountPerAddress",
          "type": "u64"
        },
        {
          "name": "pricePerToken",
          "type": "u64"
        },
        {
          "name": "startTime",
          "type": "u64"
        },
        {
          "name": "endTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "updatePresale",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "identifier",
          "type": "u8"
        },
        {
          "name": "softcapAmount",
          "type": "u64"
        },
        {
          "name": "hardcapAmount",
          "type": "u64"
        },
        {
          "name": "maxTokenAmountPerAddress",
          "type": "u64"
        },
        {
          "name": "pricePerToken",
          "type": "u64"
        },
        {
          "name": "startTime",
          "type": "u64"
        },
        {
          "name": "endTime",
          "type": "u64"
        }
      ]
    },
    {
      "name": "depositToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "presaleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "identifier",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "buyToken",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "authority",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "quoteTokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "quoteTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "identifier",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    },
    {
      "name": "claimToken",
      "accounts": [
        {
          "name": "user",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "presaleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "userTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "identifier",
          "type": "u8"
        }
      ]
    },
    {
      "name": "rescueToken",
      "accounts": [
        {
          "name": "authority",
          "isMut": true,
          "isSigner": true
        },
        {
          "name": "globalState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "presaleState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "vaultState",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenMint",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "presaleTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "authorityTokenAccount",
          "isMut": true,
          "isSigner": false
        },
        {
          "name": "tokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "associatedTokenProgram",
          "isMut": false,
          "isSigner": false
        },
        {
          "name": "systemProgram",
          "isMut": false,
          "isSigner": false
        }
      ],
      "args": [
        {
          "name": "identifier",
          "type": "u8"
        },
        {
          "name": "amount",
          "type": "u64"
        }
      ]
    }
  ],
  "accounts": [
    {
      "name": "globalState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "authority",
            "type": "publicKey"
          },
          {
            "name": "tokenMint",
            "type": "publicKey"
          },
          {
            "name": "quoteTokenMint",
            "type": "publicKey"
          },
          {
            "name": "presaleStage",
            "type": "u8"
          },
          {
            "name": "isInitialized",
            "type": "bool"
          }
        ]
      }
    },
    {
      "name": "vaultState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "isInitialized",
            "type": "bool"
          },
          {
            "name": "tokenVault",
            "type": "publicKey"
          }
        ]
      }
    },
    {
      "name": "presaleState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "softcapAmount",
            "type": "u64"
          },
          {
            "name": "hardcapAmount",
            "type": "u64"
          },
          {
            "name": "depositTokenAmount",
            "type": "u64"
          },
          {
            "name": "realAmount",
            "type": "u64"
          },
          {
            "name": "soldTokenAmount",
            "type": "u64"
          },
          {
            "name": "maxTokenAmountPerAddress",
            "type": "u64"
          },
          {
            "name": "decimal",
            "type": "u8"
          },
          {
            "name": "pricePerToken",
            "type": "u64"
          },
          {
            "name": "startTime",
            "type": "u64"
          },
          {
            "name": "endTime",
            "type": "u64"
          }
        ]
      }
    },
    {
      "name": "userState",
      "type": {
        "kind": "struct",
        "fields": [
          {
            "name": "user",
            "type": "publicKey"
          },
          {
            "name": "identifier",
            "type": "u8"
          },
          {
            "name": "buyQuoteAmount",
            "type": "u64"
          },
          {
            "name": "buyTokenAmount",
            "type": "u64"
          },
          {
            "name": "buyTime",
            "type": "u64"
          },
          {
            "name": "claimTime",
            "type": "u64"
          },
          {
            "name": "claimAmount",
            "type": "u64"
          }
        ]
      }
    }
  ],
  "events": [
    {
      "name": "Initialized",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "tokenMint",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "quoteTokenMint",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "AuthorityUpdated",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "newAuthority",
          "type": "publicKey",
          "index": false
        }
      ]
    },
    {
      "name": "ConfigUpdated",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "config",
          "type": "bool",
          "index": false
        }
      ]
    },
    {
      "name": "PresaleCreated",
      "fields": [
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "PresaleUpdated",
      "fields": [
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "timestamp",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TokenDeposited",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TokenSold",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TokenClaimed",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TokenWithdrawn",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    },
    {
      "name": "TokenRescued",
      "fields": [
        {
          "name": "authority",
          "type": "publicKey",
          "index": false
        },
        {
          "name": "identifier",
          "type": "u8",
          "index": false
        },
        {
          "name": "amount",
          "type": "u64",
          "index": false
        }
      ]
    }
  ],
  "errors": [
    {
      "code": 6000,
      "name": "MathOverflow",
      "msg": "Math operation overflow"
    },
    {
      "code": 6001,
      "name": "PresaleNotStarted",
      "msg": "Presale not started yet"
    },
    {
      "code": 6002,
      "name": "PresaleEnded",
      "msg": "Presale already ended"
    },
    {
      "code": 6003,
      "name": "PresaleNotEnded",
      "msg": "Presale not ended yet"
    },
    {
      "code": 6004,
      "name": "InsufficentTokenAmount",
      "msg": "Insufficent token amount"
    },
    {
      "code": 6005,
      "name": "MaxUserLimit",
      "msg": "Overflow max user limit"
    },
    {
      "code": 6006,
      "name": "AlreadyClaimed",
      "msg": "Already claimed"
    }
  ],
  "metadata": {
    "address": "sXngTiaWn5pCw3Gt3nJNp3uL7FBNoQnYzbPmKsBdgq3"
  }
}
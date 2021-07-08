package com.linkdev.cordova.plugin;

import android.content.Context;
import android.content.Intent;
import android.Manifest;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.CordovaInterface;

import android.util.Log;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.content.pm.PackageManager;
import org.apache.cordova.PluginResult;

/**
 * This class echoes a string called from JavaScript.
 */
public class ToasterPlugin extends CordovaPlugin {
 public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }
    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
		 Context context = cordova.getActivity().getApplicationContext();
        if(action.equals("new_activity")) {
            this.openNewActivity(context);
            return true;
        }
        if (action.equals("coolMethod")) {
            String message = args.getString(0);
            this.coolMethod(message, callbackContext);
            return true;
        }
        return false;
    }

    private void coolMethod(String message, CallbackContext callbackContext) {
        if (message != null && message.length() > 0) {
            callbackContext.success(message);
        } else {
            callbackContext.error("Expected one non-empty string argument.");
        }
    }
	 private void openNewActivity(Context context) {
        Intent intent = new Intent(context, NewActivity.class);
        this.cordova.getActivity().startActivity(intent);
    }
}

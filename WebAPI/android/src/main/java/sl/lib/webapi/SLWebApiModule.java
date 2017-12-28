
package sl.lib.webapi;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;

public class SLWebApiModule extends ReactContextBaseJavaModule {

  private final ReactApplicationContext reactContext;

  public SLWebApiModule(ReactApplicationContext reactContext) {
    super(reactContext);
    this.reactContext = reactContext;
  }

  @Override
  public String getName() {
    return "SLWebApi";
  }
}
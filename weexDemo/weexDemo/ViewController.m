//
//  ViewController.m
//  weexDemo
//
//  Created by Mr.Zhang on 2017/2/6.
//  Copyright © 2017年 lei.Zhang. All rights reserved.
//

#import "ViewController.h"
#import <WeexSDK/WXSDKInstance.h>

@interface ViewController ()
@property (nonatomic, strong) WXSDKInstance *instance;
@property (nonatomic, strong) UIView *weexView;
@property (nonatomic, assign) CGFloat weexHeight;
@end

@implementation ViewController

- (void)viewDidLoad
{
    [super viewDidLoad];
    // Do any additional setup after loading the view, typically from a nib.
    [[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(notificationRefreshInstance:) name:@"RefreshInstance" object:nil];

    _weexHeight = self.view.frame.size.height;
    [self.navigationController.navigationBar setHidden:YES];
    [self render];
}

- (void)dealloc
{
    [_instance destroyInstance];
    [[NSNotificationCenter defaultCenter] removeObserver:self];
}
#pragma mark - notification
- (void)notificationRefreshInstance:(NSNotification *)notification {
    [self render];
}
- (void)render
{
    _instance = [[WXSDKInstance alloc] init];
    _instance.viewController = self;
    CGFloat width = self.view.frame.size.width;
    _instance.frame = CGRectMake(self.view.frame.size.width-width, 0, width, _weexHeight);
    
    __weak typeof(self) weakSelf = self;
    _instance.onCreate = ^(UIView *view) {
        [weakSelf.weexView removeFromSuperview];
        weakSelf.weexView = view;
        [weakSelf.view addSubview:weakSelf.weexView];
        UIAccessibilityPostNotification(UIAccessibilityScreenChangedNotification, weakSelf.weexView);
    };
    _instance.onFailed = ^(NSError *error) {
        NSLog(@"failed %@",error);
    };
    
    _instance.renderFinish = ^(UIView *view) {
        NSLog(@"render finish");
    };
    
    _instance.updateFinish = ^(UIView *view) {
        NSLog(@"update Finish");
    };
//    NSString *url = [NSString stringWithFormat:@"file://%@/hello.js",[NSBundle mainBundle].bundlePath];
    [_instance renderWithURL:[NSURL URLWithString:self.url] options:@{@"bundleUrl":self.url} data:nil];
}

- (void)didReceiveMemoryWarning
{
    [super didReceiveMemoryWarning];
    // Dispose of any resources that can be recreated.
}

@end
